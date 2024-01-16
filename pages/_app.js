import { Auth0Provider } from '@auth0/auth0-react';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="codejs.us.auth0.com"
      clientId="muAdG1rlH7HHnMTpSXSZPY5JJRumLStE"
      authorizationParams={{
        redirect_uri: "https://wonderful-semifreddo-14c7ee.netlify.app/"
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
