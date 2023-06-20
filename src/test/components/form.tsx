import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Skeleton, Grid, Button, Typography, TextField } from '@mui/material';

import { useGetDummyComments } from '../hooks/query';
import { colorMap, DummyCard } from '../components/card';

export interface DummyList {
  readonly id: number;
  readonly comment: string;
  readonly userName: string;
  readonly userInitials: string;
}

const localStorageDummyItem = 'dummy-comment';

export const TestTaskFrontend = () => {
  const { t } = useTranslation('form');
  const { data, isLoading } = useGetDummyComments();
  const [comment, setComment] = useState<string | null>('');
  const [dummyList, setDummyList] = useState<DummyList[]>([]);

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage) {
      setComment(localStorage.getItem(localStorageDummyItem));
    }
  }, []);

  useEffect(() => {
    if (data?.comments) {
      setDummyList(() => {
        return data.comments.reduce((acc, item) => {
          const userInitials = item.user.username.slice(0, 2);

          acc.push({
            userInitials,
            id: item.user.id,
            comment: item.body,
            userName: item.user.username,
          });

          return acc;
        }, [] as DummyList[]);
      });
    }
  }, [data?.comments]);

  const handleDeleteComment = (commentToDelete: string) => {
    const newList = dummyList?.filter(item => item.comment !== commentToDelete);

    setDummyList(newList);
  };

  const handleSubmit = () => {
    // @ts-ignore
    setDummyList(prevState => [
      ...prevState,
      {
        userInitials: 'UU',
        id: 322,
        comment,
        userName: 'Unregistered User',
      },
    ]);

    setComment('');
    localStorage.setItem(localStorageDummyItem, '');
  };

  return (
    <Box
      m="-60px"
      p="60px"
      minHeight="90vh"
      bgcolor="background: rgb(126,121,156); background: linear-gradient(140deg, rgba(126,121,156,1) 0%, rgba(245,196,56,1) 35%, rgba(217,201,38,1) 100%);"
    >
      {isLoading ? (
        <Skeleton height={200} width="100%" />
      ) : (
        <Grid container rowSpacing={2} gap={5}>
          {dummyList?.map((item, index) => (
            <DummyCard
              key={item.userName + index + 'key'}
              item={item}
              onClick={() => handleDeleteComment(item.comment)}
            />
          ))}
        </Grid>
      )}
      <Box pt={5}>
        <TextField
          multiline
          placeholder="Enter your message"
          value={comment}
          onChange={e => {
            setComment(e.target.value);
            localStorage.setItem(localStorageDummyItem, e.target.value);
          }}
          InputProps={{
            sx: {
              borderRadius: 0,
              backgroundColor: 'white',
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colorMap.border },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                backgroundColor: 'white',
                px: 1,
                borderRadius: 1,
                border: `1px solid ${colorMap.border}`,
              },
            },
          }}
        />
        <Box display="flex" justifyContent="flex-end" sx={{ transform: 'translate(1%, -50%)' }}>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: colorMap.border,
              borderRadius: 0,
              boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)',
              ':hover': {
                backgroundColor: colorMap.border,
              },
            }}
          >
            <Typography textTransform="initial" color="white">
              Send
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
