import { Box } from '@mui/material';

import { CodeWarsOverallProps } from '../types/codeWars';

enum MapEnum {
  blue = 'blue',
  black = 'black',
  yellow = 'yellow',
}

const colorMap: Record<MapEnum, string> = {
  blue: '#1f87e7',
  black: '#181919',
  yellow: '#ecb613',
};

export const CodeWarsOverall = ({ item }: CodeWarsOverallProps) => {
  return (
    <>
      <Box
        textAlign="center"
        color={colorMap[item.color as MapEnum]}
        bgcolor={colorMap[item.color as MapEnum]}
        width={64}
        position="relative"
        sx={{
          float: 'right',
          clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 100% 50%, 90% 100%, 10% 100%, 0 50%, 0 50%)',
          '::before': {
            content: `"${item.name}"`,
            display: 'block',
            color: colorMap[item.color as MapEnum],
            backgroundColor: colorMap.black,
            position: 'absolute',
            top: 4,
            left: 4,
            fontSize: 11,
            width: 56,
            clipPath: 'polygon(9% 0%, 91% 0, 99% 50%, 99% 50%, 91% 100%, 9% 100%, 1% 50%, 1% 50%)',
          },
        }}
      >
        {item.name}
      </Box>
      <strong>score:</strong> {item.score}
    </>
  );
};
