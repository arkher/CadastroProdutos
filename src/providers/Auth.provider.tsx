import React, { useLayoutEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useDispatch } from 'react-redux';
import { updateToken } from '@/api';
import { ApplicationService } from '@/services/Application.service';
import { getPerfil } from '@/utils/roles.utils';
// import { setUser } from './redux/reducers/user.reducer';

type AuthProviderProps = {
  children: React.ReactElement;
};

export function AuthProvider({
  children,
}: AuthProviderProps): React.ReactElement {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();

  const [carregando, setCarregando] = useState(true);

  useLayoutEffect(() => {
    const carregarUsuario = async () => {
      try {
        // const fetchedUser = await UsuariosService.validarERecuperar();
        // dispatch(setUser(fetchedUser));
        setCarregando(false);
      } catch (e) {
        ApplicationService.forceLogout('FALHA_AO_VALIDAR');
      }
    };
    if (keycloak.authenticated && getPerfil()) {
      updateToken(keycloak.token || ``);
      carregarUsuario();
    } else {
      setCarregando(false);
    }
  }, [keycloak, dispatch]);

  useLayoutEffect(() => {
    if (keycloak.authenticated) {
      keycloak.onAuthRefreshSuccess = () => {
        updateToken(keycloak.token || '');
      };
    }
  });

  return carregando && keycloak.authenticated ? <></> : children;
}
