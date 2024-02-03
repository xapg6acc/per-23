import { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const domain: string = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '';
const clientId: string = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '';

export interface Auth0ProviderWithHistoryProps {
  readonly children?: ReactNode;
}

export const Auth0ProviderWithHistory = ({ children }: Auth0ProviderWithHistoryProps) => {
  return (
    <Auth0Provider domain={domain} clientId={clientId}>
      {children}
    </Auth0Provider>
  );
};
