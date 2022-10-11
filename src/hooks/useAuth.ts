import { useKeycloak } from '@react-keycloak/web';

export const useAuth = () => {
  const { keycloak } = useKeycloak();
  const { authenticated, login, logout, hasRealmRole, hasResourceRole } = keycloak;

  const hasRole = (role: string) => hasRealmRole(role) || hasResourceRole(role);

  return { authenticated, login, logout, hasRole };
};
