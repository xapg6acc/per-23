import { Box, ButtonBase, Tooltip } from '@mui/material';

import { MainItem } from '../types';

export interface TooltipButtonProps {
  readonly onClick: () => void;
  readonly item: MainItem;
}

export const TooltipButton = ({ onClick, item }: TooltipButtonProps) => {
  return (
    <Tooltip title={item.tooltip}>
      <ButtonBase
        onClick={onClick}
        sx={{
          borderRadius: 5,
          overflow: 'hidden',
          minWidth: 1,
          height: 1,
        }}
      >
        <Box
          width={1}
          height={1}
          display="grid"
          fontSize="5rem"
          fontWeight={700}
          textAlign="center"
          sx={{
            span: {
              color: 'transparent',
              backgroundClip: 'content-box',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            ':hover > span': {
              backgroundClip: 'text',
              filter: 'drop-shadow(1px 1px 1px grey)',
            },
          }}
        >
          <Box
            component="span"
            sx={{
              backgroundImage: `url(${item.image.src})`,
              backgroundSize: 'cover',
              objectPosition: '50% 50%',
            }}
          >
            {item.title}
          </Box>
        </Box>
      </ButtonBase>
    </Tooltip>
  );
};
