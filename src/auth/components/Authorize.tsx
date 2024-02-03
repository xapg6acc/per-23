import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button } from '@mui/material';

export const Authorize = () => {
  const { push } = useRouter();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  console.log('user', user);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" gap={2}>
      <Button variant="outlined" onClick={() => push('/')}>back</Button>
      {isAuthenticated ? (
        <>
          <p>Hello, {user?.name}!</p>
          <Button variant="contained" onClick={() => logout()}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="outlined" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      )}
    </Box>
  );
};
