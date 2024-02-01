import { Fragment } from 'react';
import { Box } from '@mui/material';

import { ResumeData } from '../types';
import { ActionAreaCard } from './area-card';
import { Trans } from 'next-i18next';

export interface ActionAreaListProps {
  readonly data?: ResumeData;
}

export const ActionAreaList = ({ data }: ActionAreaListProps) => {
  return (
    <>
      {Object.entries(data as Record<any, any>).map(([key, values]) => {
        if (Array.isArray(values)) {
          const content = (
            <Fragment key={key}>
              {values.map(value => (
                <Box key={value}>
                  <Trans>{value}</Trans>
                </Box>
              ))}
            </Fragment>
          );

          return <ActionAreaCard key={key} title={key} content={content} />;
        } else if (typeof values === 'object') {
          const content = (
            <Fragment key={key}>
              {Object.entries(values as Record<any, any>).map(([value, items]) => {
                if (Array.isArray(items)) {
                  return (
                    <Fragment key={value}>
                      {items.map(item => (
                        <Box key={item}>{item}</Box>
                      ))}
                    </Fragment>
                  );
                }

                return (
                  <Box key={value} sx={{ 'a, a:visited': { color: 'primary.main' } }}>
                    <strong>{value}: </strong>
                    {items.includes('https') ? (
                      <a href={items} target="_blank">
                        {value} link
                      </a>
                    ) : items.includes('+') ? (
                      <a href={`tel:${items}`} target="_blank">
                        {items}
                      </a>
                    ) : items.includes('@') ? (
                      <a href={`mailto:${items}`} target="_blank">
                        {items}
                      </a>
                    ) : (
                      items
                    )}
                  </Box>
                );
              })}
            </Fragment>
          );

          return <ActionAreaCard key={key} title={key} content={content} />;
        } else {
          const content = <Box>{values}</Box>;

          return <ActionAreaCard key={key} title={key} content={content} />;
        }
      })}
    </>
  );
};
