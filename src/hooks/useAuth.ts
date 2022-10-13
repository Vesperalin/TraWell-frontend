import { useKeycloak } from '@react-keycloak/web';
import { Role } from '~/enums/Role';

export const useAuth = () => {
  const { keycloak } = useKeycloak();
  const { authenticated, login, logout, hasRealmRole, hasResourceRole, token } = keycloak;

  const hasRole = (role: Role) => hasRealmRole(role) || hasResourceRole(role);

  return { authenticated, login, logout, hasRole, token };
};
