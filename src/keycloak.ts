import Keycloak from 'keycloak-js';
import options from './keycloak.options';

const configName = localStorage.getItem('configName');

const keycloakInstance = Keycloak(options[configName ?? 'pulse']);

export const initKeycloakWithConfig = async (
  optionName: string,
  customRedirectURL?: string | null,
): Promise<void> => {
  localStorage.setItem('configName', optionName);

  const keycloak = Keycloak(options[optionName]);

  return keycloak.init(options[optionName]).then((logged: boolean) => {
    if (!logged) {
      const url = keycloak.createLoginUrl({
        redirectUri: `${process.env.REACT_APP_HOST}/cadastro${
          customRedirectURL || ''
        }`,
      });
      window.location.assign(url);
    } else {
      window.location.href = '/';
    }
  });
};

export default keycloakInstance;
