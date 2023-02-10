import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ListIcon from '@mui/icons-material/List';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: '#7C6E7F',
    color:'white',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: 'yellow',
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: 'rgb(240, 240, 65)'
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        sx={{
          color: 'white',
          borderRadius: '10px',
          borderTop: "2px solid #FF6EC7",
          borderBottom: "2px solid #FF6EC7",}}
        disableElevation
        onClick={handleClick}
        startIcon={<ListIcon sx={{color: '#FF6EC7'}}/>}
        endIcon={<KeyboardArrowDownIcon sx={{color: '#FF6EC7'}}/>}
      >
        Features
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{backgroundColor: 'rgb(255, 110, 199)', marginTop:'19px', borderRadius:'19px',}}>
          <PinDropIcon />
          NearbySpotter
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{backgroundColor: 'rgb(255, 110, 199)', marginTop:'19px', borderRadius:'19px'}}>
          <RequestQuoteIcon />
          ExpenseMate
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{backgroundColor: 'rgb(255, 110, 199)', marginTop:'19px', borderRadius:'19px'}}>
          <AutoAwesomeIcon />
          MemoryPocket
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
