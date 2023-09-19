import { useTranslation } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';
import { Paper as MuiPaper, Skeleton, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { Level } from '@app/old/constants/level';

import { Button } from './button';
import { PaperMedia } from './paperMedia';
import { Typography } from './typography';

export interface PaperItem {
  readonly title: string;
  readonly level: Level;
  readonly category: string;
  readonly description: string;
}

export interface PaperProps {
  readonly item: PaperItem;
  readonly isLoading?: boolean;
  readonly image: StaticImageData;
}

const levelMap = {
  [Level.Easy]: { color: 'success.main', icon: <TrendingDownIcon /> },
  [Level.Medium]: { color: 'warning.main', icon: <TrendingUpIcon /> },
  [Level.Hard]: { color: 'error.main', icon: <TrendingUpIcon /> },
};

export const Paper = ({ item, isLoading, image }: PaperProps) => {
  const { t } = useTranslation();

  return (
    <MuiPaper sx={{ borderRadius: 3, p: 2 }}>
      <PaperMedia isLoading={isLoading} sx={{ position: 'relative', height: 400, width: 1 }}>
        {isLoading ? (
          <Skeleton sx={{ height: 400 }} animation="wave" />
        ) : (
          <>
            <Box position="absolute" sx={{ zIndex: 1, right: 0 }}>
              <IconButton onClick={() => console.log('click')} sx={{ color: 'warning.main', svg: { height: 36, width: 36 } }}>
                <FavoriteIcon />
              </IconButton>
            </Box>
            <Image
              fill
              src={image}
              alt="image"
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </>
        )}
      </PaperMedia>
      <Typography isLoading={isLoading} variant="h2">
        {item.title}
      </Typography>
      <Typography isLoading={isLoading} variant="h5">
        {item.description}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ svg: { color: levelMap[item.level].color } }}
      >
        <Box display="flex" alignItems="center" gap={0.5}>
          <Typography variant="h6">{item.category}</Typography>
          {levelMap[item.level].icon}
        </Box>
        <Button loading={isLoading}>{t('button.source')}</Button>
      </Box>
    </MuiPaper>
  );
};
