import keycloakInstance from '@/keycloak';
import { persistor } from '@/store';

export const ApplicationService = {
  logout: async (): Promise<void> => {
    await persistor.purge();
    return keycloakInstance.logout({
      redirectUri: `${process.env.REACT_APP_HOST}/cadastro`,
    });
  },
  forceLogout: async (tipo: ForcedLogoutErrors): Promise<void> => {
    await persistor.purge();
    localStorage.setItem('FORCE_LOGOUT_ERROR', tipo);
    return keycloakInstance.logout({
      redirectUri: `${process.env.REACT_APP_HOST}/cadastro`,
    });
  },
};
