import { Fragment, PropsWithChildren } from 'react';
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

  if (authenticated && (!role || hasRole(role))) {
    return children as JSX.Element;
  } else if (elementToPutInstead) {
    return elementToPutInstead as JSX.Element;
  } else {
    return <></>;
  }
};
