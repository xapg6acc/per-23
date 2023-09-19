import { ReactNode } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HardwareIcon from '@mui/icons-material/Hardware';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { CodeWarsOverall } from './code-wars-overall';
import { CodeWarsOverall as CWOType } from '../types/codeWars';

const camelCaseToSeparatedWords = (camelCase: string) => {
  return camelCase.split(/(?=[A-Z])/).join(' ');
};

enum MapElement {
  books = 'books',
  skills = 'skills',
  achievements = 'achievements',
  codeWars = 'codeWars',
  relevant = 'relevant',
  contact = 'contact',
  position = 'position',
  experience = 'experience',
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
  additionalEducation: <SchoolIcon />,
};

export interface ActionAreaCardProps {
  readonly title: string;
  readonly content?: ReactNode;
  readonly item?: CWOType;
}

export const ActionAreaCard = ({ title, content, item }: ActionAreaCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="primary.main"
        >
          <Typography fontSize={24} textTransform="capitalize">
            {camelCaseToSeparatedWords(title)}
          </Typography>
          {imagesMap[title as MapElement]}
        </Box>
        <CardMedia sx={{ mt: 2, 'div:nth-child(even)': { backgroundColor: 'grey.50' } }}>
          {item && <CodeWarsOverall item={item} />}
          {content}
        </CardMedia>
      </CardContent>
    </Card>
  );
};
