import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Loader } from '~/components/Loader';
import { Paths } from '~/enums/Paths';
import { Role } from '~/enums/Role';
import { useAuth } from '~/hooks/useAuth';

interface Props {
  element: JSX.Element;
  role?: Role;
}

export const PrivateRoute = ({ element, role }: Props) => {
  const { authenticated, hasRole } = useAuth();
  const [isRole, setIsRole] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const check = async () => {
      if (role && (await hasRole(role))) {
        setIsRole(true);
      } else {
        setIsRole(false);
      }
    };
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isRole === undefined) {
    return <Loader />;
  } else if (isRole !== undefined && authenticated && (!role || isRole)) {
    return element;
  } else {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          // eslint-disable-next-line max-len
          text: 'You can not access this page. Please login or create account with needed permisions',
        }}
      />
    );
  }
};
