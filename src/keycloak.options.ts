export default {
  pulse: {
    realm: process.env.REACT_APP_KEYCLOAK_REALM || '',
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || '',
    url: process.env.REACT_APP_KEYCLOAK_URL || '',
  },
};
