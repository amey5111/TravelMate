import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'mui-image'

import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HailIcon from '@mui/icons-material/Hail';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import Button from '@mui/material/Button';
import logo from "./logo.png"
import useStyles from './styles.js';
const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
      <Box className={classes.TitleFrame}>
        <Image src={logo} height={65} width={65} className={classes.logo}/>
        <Typography variant="h3" className={classes.titleT}>TravelMate</Typography>
      </Box>
        <Box display="flex" className={classes.ButtonFrame}>
        <Tooltip title="For Managing expenses on travel"><Button variant="text" startIcon={<RequestQuoteIcon/>} sx={{
    color: 'white',
    borderRadius: '10px',
    borderTop: "2px solid #FF6EC7",
    borderBottom: "2px solid #FF6EC7",
  }}><Typography variant="subtitle1" className={classes.title}>ExpenseMate</Typography></Button></Tooltip>
  <Tooltip title="For Showcasing Photoes and videoes of trip in creative way"><Button variant="text" startIcon={<AutoAwesomeIcon/>} sx={{
    color: 'white',
    borderRadius: '10px',
    borderTop: "2px solid #FF6EC7",
    borderBottom: "2px solid #FF6EC7",
  }} ><Typography variant="subtitle1" className={classes.title}>MemoryPocket</Typography></Button></Tooltip>
        </Box>
        <Box display="flex">
          <Typography variant="h6" className={classes.searchLabel}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
        <Box display="flex" className={classes.ButtonFrame1}>
        <Button variant="contained" sx={{backgroundColor: ' #FF6EC7'}} startIcon={<RunCircleIcon/>}>Login</Button>
        <Button variant="contained" sx={{backgroundColor: ' #FF6EC7'}} endIcon={< HailIcon/>}>SignUp</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;