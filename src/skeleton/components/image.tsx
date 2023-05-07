import { CardMedia, Skeleton } from '@mui/material'

export interface ImageProps {
  readonly src: string;
  readonly alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <CardMedia
      component="img"
      height="100%"
      image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
      alt="Nicola Sturgeon on a TED talk stage"
    />
  );
};
