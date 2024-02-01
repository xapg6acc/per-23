import { ReactNode } from 'react';
import { Card, CardContent, CardMedia, Divider, Typography, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HardwareIcon from '@mui/icons-material/Hardware';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { CodeWarsUser } from '../types/codeWars';
import { CodeWarsOverall } from './code-wars-overall';
import { camelCaseToSeparatedWords } from '../helpers';

enum MapElement {
  books = 'books',
  skills = 'skills',
  codeWars = 'codeWars',
  relevant = 'relevant',
  contact = 'contact',
  position = 'position',
  experience = 'experience',
  achievements = 'achievements',
  freeCodeCamp = 'freeCodeCamp',
  additionalEducation = 'additionalEducation',
}

const imagesMap: Record<MapElement, ReactNode> = {
  books: <MenuBookIcon />,
  skills: <DataObjectIcon />,
  achievements: <DoneIcon />,
  codeWars: <HardwareIcon />,
  relevant: <FactCheckIcon />,
  contact: <ContactPageIcon />,
  position: <EngineeringIcon />,
  experience: <PsychologyIcon />,
  freeCodeCamp: <HistoryEduIcon />,
  additionalEducation: <SchoolIcon />,
};

export interface ActionAreaCardProps {
  readonly title: string;
  readonly content?: ReactNode;
  readonly item?: Partial<CodeWarsUser>;
}

export const ActionAreaCard = ({ title, content, item }: ActionAreaCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize={24} textTransform="capitalize">
            {camelCaseToSeparatedWords(title)}
          </Typography>
          {imagesMap[title as MapElement]}
        </Box>
        <Divider sx={{ color: 'grey.300', userSelect: 'none' }}>~</Divider>
        <CardMedia
          sx={{
            '.MuiBox-root:nth-of-type(even), .MuiGrid-container:nth-of-type(even)': {
              backgroundColor: 'grey.50',
            },
          }}
        >
          {item && <CodeWarsOverall item={item} />}
          {content}
        </CardMedia>
      </CardContent>
    </Card>
  );
};
