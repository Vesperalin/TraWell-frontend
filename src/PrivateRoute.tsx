import { Navigate } from 'react-router-dom';
import { Paths } from '~/enums/Paths';
import { Role } from '~/enums/Role';
import { useAuth } from '~/hooks/useAuth';

interface Props {
  element: JSX.Element;
  role?: Role;
}

export const PrivateRoute = ({ element, role }: Props) => {
  const { authenticated, hasRole } = useAuth();

  if (authenticated && (!role || hasRole(role))) {
    return element;
  }

  return (
    <Navigate
      to={Paths.Error}
      replace={true}
      state={{
        text: 'You can not access this page. Please login or create account with needed permisions',
      }}
    />
  );
};
