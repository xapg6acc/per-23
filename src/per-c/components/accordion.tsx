import Image from 'next/image';
import { SyntheticEvent, useState, useEffect, useCallback } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material';

import { Svg } from '@app/ui/svg';

import { itemsMap } from '../constants';

const list = [1, 2, 3, 4, 5, 6];

export const CAccordion = () => {
  const [expanded, setExpanded] = useState<number>(1);

  const handleChange = useCallback(
    (panel: number) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : 1);
    },
    [],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = list.findIndex(item => item === expanded);
      const nextIndex = (currentIndex + 1) % list.length;

      setExpanded(list[nextIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [expanded]);

  return (
    <Grid container spacing={5} p={10}>
      <Grid item xs={12} md={6}>
        <Box borderRadius={5} overflow="hidden">
          {list.map(item => (
            <Accordion
              key={item}
              disableGutters
              elevation={0}
              expanded={expanded === item}
              onChange={handleChange(item)}
              sx={{
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(0deg)' },
                '&.Mui-expanded::before': { backgroundColor: 'common.black', opacity: 1 },
                '&.MuiAccordion-root': { color: expanded === item ? 'common.black' : 'gray' },
              }}
            >
              <AccordionSummary
                expandIcon={<Svg Icon={itemsMap[item].icon} size={24} />}
                id={`${item}d-header`}
                aria-controls={`${item}d-content`}
                sx={{
                  gap: 2,
                  flexDirection: 'row-reverse',
                  svg: { fill: item === expanded ? 'black' : 'gray' },
                }}
              >
                <Typography>Collapsible Group Item #{itemsMap[item].color}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography ml={5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          minHeight={1}
          width={1}
          bgcolor={itemsMap[expanded].color}
          borderRadius={5}
          overflow="hidden"
          position="relative"
        >
          <Image fill quality={80} src={itemsMap[expanded].image} alt="accordion" style={{ objectFit: 'cover' }} />
        </Box>
      </Grid>
    </Grid>
  );
};
