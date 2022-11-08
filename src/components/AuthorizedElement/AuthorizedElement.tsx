import { PropsWithChildren, useEffect, useState } from 'react';
import { Role } from '~/enums/Role';
import { useAuth } from '~/hooks/useAuth';

interface Props {
  role?: Role;
  elementToPutInstead?: JSX.Element;
}

export const AuthorizedElement = ({
  children,
  role,
  elementToPutInstead,
}: PropsWithChildren<Props>): JSX.Element => {
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
    return children as JSX.Element;
  } else if (elementToPutInstead) {
    return elementToPutInstead as JSX.Element;
  } else {
    return <></>;
  }
};
