import { Paths } from '~/enums/Paths';
import { StyledBox, StyledLink, StyledTypography } from './DesktopMenu.style';

interface Props {
  pages: {
    name: string;
    path: Paths | string;
  }[];
}

export const DesktopMenu = ({ pages }: Props) => {
  return (
    <StyledBox>
      {pages.map((page) => (
        <StyledLink
          style={{ textDecoration: 'none' }}
          key={page.name}
          to={page.path}
        >
          <StyledTypography variant='subtitle2'>{page.name}</StyledTypography>
        </StyledLink>
      ))}
    </StyledBox>
  );
};
