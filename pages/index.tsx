import Head from 'next/head';
import {useEffect, useState} from 'react';
import {Grid} from '@mui/material';

import {Paper} from '@app/skeleton';
import {Level} from '@app/constants/level';
import image from '@app/images/wallhaven-l83o92.jpeg';

export default function Home() {
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [loading]);

  const list = [
    { title: 'Title 1', description: 'Description 1', category: 'Math', level: Level.Easy },
    { title: 'Title 2', description: 'Description 2', category: 'Math', level: Level.Easy },
    { title: 'Title 3', description: 'Description 3', category: 'Chemistry', level: Level.Hard },
    { title: 'Title 4', description: 'Description 4', category: 'Language', level: Level.Medium },
    { title: 'Title 5', description: 'Description 5', category: 'Chemistry', level: Level.Medium },
  ];

  return (
    <>
      <Head>
        <title>test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container spacing={2}>
          {list.map(item => (
            <Grid item xs={6} key={item.title}>
              <Paper item={item} image={image} isLoading={loading} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
}
