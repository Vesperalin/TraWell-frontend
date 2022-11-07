import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '~/enums/Paths';
import { StyledMenuItem, StyledIconButton } from './MobileMenu.style';

interface Props {
  pages: {
    name: string;
    path: Paths | string;
  }[];
}

export const MobileMenu = ({ pages }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <StyledIconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </StyledIconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        color='#47B5FF'
      >
        {pages.map((page) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={page.name}
            to={page.path}
          >
            <StyledMenuItem onClick={handleCloseNavMenu}>
              <Typography variant='subtitle2'>{page.name}</Typography>
            </StyledMenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
};
