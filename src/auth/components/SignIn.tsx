import { useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { CreateUserForm } from './CreateUserForm';

export const SignUp = () => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState();

  return (
    <Box display="flex" justifyContent="center">
      <CreateUserForm />
    </Box>
  );
};
