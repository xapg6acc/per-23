import { Box, Grid } from '@mui/material';

import { CodeWarsUser } from '../types/codeWars';

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

const codeWarsInfo = item => {
  return Object.entries(item).reduce((acc, [key, value]) => {
    if (key === 'languages') {
      const languagesInfo = Object.entries(value).map(([languageKey, languageValue]) => ({
        key: languageKey,
        ...languageValue,
      }));

      acc.push(...languagesInfo);
    } else {
      acc.push({ key, ...value });
    }

    return acc;
  }, []);
};

export const CodeWarsOverall = ({ item }: Partial<CodeWarsUser>) => {
  return (
    <>
      {codeWarsInfo(item.ranks).map(rank => (
        <Grid container key={rank.key}>
          <Grid item xs={4}>
            {rank.key}
          </Grid>
          <Grid item xs={4}>
            <b>score: </b>
            {rank.score}
          </Grid>
          <Grid item xs={4}>
            <Box
              textAlign="center"
              color={colorMap[rank.color as MapEnum]}
              bgcolor={colorMap[rank.color as MapEnum]}
              width={64}
              position="relative"
              sx={{
                float: 'right',
                clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 100% 50%, 90% 100%, 10% 100%, 0 50%, 0 50%)',
                '::before': {
                  content: `"${rank.name}"`,
                  display: 'block',
                  color: colorMap[rank.color as MapEnum],
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
              {rank.name}
            </Box>
          </Grid>
        </Grid>
      ))}
      <Grid container>
        <Grid item xs={4}>
          catas
        </Grid>
        <Grid item xs={4}>
          <b>score: </b>
          {item.codeChallenges.totalCompleted}
        </Grid>
        <Grid item xs={4} sx={{ span: { float: 'right', textDecoration: 'line-through', mr: 1 } }}>
          <span>solved</span>
        </Grid>
      </Grid>
    </>
  );
};
