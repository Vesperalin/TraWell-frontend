import { Fragment, PropsWithChildren } from 'react';
import { useAuth } from '~/hooks/useAuth';

interface Props {
  role?: string;
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
    return elementToPutInstead;
  } else {
    return <></>;
  }
};
