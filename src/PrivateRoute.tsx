import { useEffect, useState } from 'react';
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
  const [isRole, setIsRole] = useState<boolean>(false);

  useEffect(() => {
    const check = async () => {
      if (role && (await hasRole(role))) {
        setIsRole(true);
      }
    };
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authenticated && (!role || isRole)) {
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
