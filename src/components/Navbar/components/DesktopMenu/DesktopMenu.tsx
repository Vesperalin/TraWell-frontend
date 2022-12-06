import { Paths } from '~/enums/Paths';
import { StyledBox, StyledNavLink, StyledTypography } from './DesktopMenu.style';

interface Props {
  pages: {
    mobileId: string;
    desktopId: string;
    name: string;
    path: Paths | string;
  }[];
}

export const DesktopMenu = ({ pages }: Props) => {
  return (
    <StyledBox>
      {pages.map((page) => (
        <StyledNavLink
          id={page.desktopId}
          style={{ textDecoration: 'none' }}
          key={page.name}
          to={page.path}
          className={(isActive) => (isActive ? 'active' : 'inactive')}
        >
          <StyledTypography variant='subtitle2'>{page.name}</StyledTypography>
        </StyledNavLink>
      ))}
    </StyledBox>
  );
};
