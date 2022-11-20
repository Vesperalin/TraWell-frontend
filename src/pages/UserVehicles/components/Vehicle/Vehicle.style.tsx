import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const VehicleWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '15px 30px',
  backgroundColor: theme.palette.common.dimmedWhite,
  boxShadow: '0px 1px 1px 1px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const TrashIcon = styled(DeleteForeverIcon)(({ theme }) => ({
  color: theme.palette.common.navy,
  transition: 'all .2s ease-in-out',
  opacity: '0.8',

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },
}));

export const VehicleDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  fontWeight: '500',
}));
