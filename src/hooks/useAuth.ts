import { useKeycloak } from '@react-keycloak/web';
import { Role } from '~/enums/Role';

export const useAuth = () => {
  const { keycloak } = useKeycloak();
  const { authenticated, login, logout, token, loadUserInfo } = keycloak;

  const checkRole = async (role: Role) => {
    const userData = await loadUserInfo();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userRole = (userData as any).user_type as string;
    if (userRole === role) return true;
    else return false;
  };

  const hasRole = async (role: Role) => {
    return checkRole(role);
  };

  return { authenticated, login, logout, hasRole, token };
};
