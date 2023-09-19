import { MouseEvent, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogProps,
  IconButton,
  Box,
  Typography,
  DialogTitle,
  Divider,
  Button,
} from '@mui/material';
import { Trans } from 'next-i18next';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { Product } from '../../types';

export interface DeleteModalProps extends Omit<DialogProps, 'onClose' | 'onSubmit' | 'title'> {
  readonly title: string;
  readonly onClose: () => void;
  readonly content?: ReactNode;
  readonly onSubmit?: (value: any) => void;
}

export const DeleteModal = ({ onClose, content, title, onSubmit, ...props }: DeleteModalProps) => {
  return (
    <Dialog
      onClose={onClose}
      {...props}
      sx={{
        '.MuiPaper-elevation, .MuiDialog-paper': {
          overflow: 'visible',
          position: 'relative',
        },
        '.MuiDialog-paper': { minWidth: { md: 700 } },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,

            boxShadow: 1,
            backgroundColor: 'common.white',
            transform: 'translate(50%, -50%)',
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>
          <Typography variant="h3">{title}</Typography>
        </DialogTitle>
        <Divider orientation="horizontal" />
        <Box px={5} py={2}>
          <Trans>{content}</Trans>
        </Box>
        <Box py={2} px={3} display="flex" justifyContent="flex-end" sx={{ backgroundColor: 'green.100' }} gap={2}>
          <Button onClick={onClose} variant="text" sx={{ color: 'common.white', borderRadius: 5 }}>
            cancel
          </Button>
          <Button
            onClick={onSubmit}
            variant="contained"
            startIcon={<DeleteOutlineIcon sx={{ fill: ({ palette }) => palette.error.main }} />}
            sx={{ color: 'error.main', backgroundColor: 'common.white', borderRadius: 5, fontWeight: 600 }}
          >
            approve
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
