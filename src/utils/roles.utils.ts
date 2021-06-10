import { find } from 'lodash';
import keycloakInstance from '@/keycloak';

export type item<T> = {
  key: string;
  value: T[];
};

export function itemsPerRoles<T>(roles: string[], collection: item<T>[]): T[] {
  const options = roles.map(role => {
    const matchingItem = find(collection, { key: role });
    return matchingItem?.value || [];
  });

  return options.flat(1);
}

export function getRolesFromKeycloak(): string[] {
  const token = keycloakInstance.tokenParsed;
  if (token) {
    const backend_client_id: string =
      process.env.REACT_APP_KEYCLOAK_CLIENT_BACKEND_ID || '';
    const client_id: string = process.env.REACT_APP_KEYCLOAK_CLIENT_ID || '';

    const realm_roles = token.realm_access?.roles || [''];

    const client_backend_roles = token.resource_access?.[backend_client_id]
      ?.roles || [''];
    const client_roles = token.resource_access?.[client_id]?.roles || [''];

    const roles = [...realm_roles, ...client_backend_roles, ...client_roles];

    const rolesSet = new Set(roles.filter(role => role !== ''));
    return Array.from(rolesSet);
  }
  return [];
}

export function hasRole(role: string): boolean {
  const roles = getRolesFromKeycloak();
  return roles.some(currentRole => currentRole === role);
}

export const getPerfil = (): string | undefined => {
  const roles = getRolesFromKeycloak();
  const perfil = roles.find(r => r.includes('perfil_'));
  return perfil;
};
