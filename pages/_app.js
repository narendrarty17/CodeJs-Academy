import { Auth0Provider } from '@auth0/auth0-react';

import '@/styles/globals.css';

const devUrl = "http://localhost:3000";
const prodUrl = "https://wonderful-semifreddo-14c7ee.netlify.app/";

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="codejs.us.auth0.com"
      clientId="muAdG1rlH7HHnMTpSXSZPY5JJRumLStE"
      authorizationParams={{
        redirect_uri: { prodUrl }
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
