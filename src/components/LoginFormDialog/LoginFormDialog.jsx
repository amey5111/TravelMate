import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import Divider from '@mui/material/Divider';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import Image from 'mui-image';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from '@mui/material';
import { margin } from '@mui/system';
import Chip from '@mui/material/Chip';

export default function LoginFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ backgroundColor: ' #FF6EC7' }}
        startIcon={<RunCircleIcon />}
      >
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: 'rgb(240, 240, 65)' }}>
          LOGIN
        </DialogTitle>
        <Divider sx={{ backgroundColor: '#FF6EC7' }} />
        <DialogContent>
          <DialogContentText sx={{backgroundColor: "#FF6EC7", color: "white", padding: "10px", borderRadius: "19px", margin: "2px"}}>
            Welcome Back Please Login to continue
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address/UserName"
            type="email"
            fullWidth
            variant="standard"
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            startIcon={<HighlightOffIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ backgroundColor: '#FF6EC7' }}
            startIcon={<RunCircleIcon />}
          >
            Login
          </Button>
        </DialogActions>
        <Typography sx={{marginX: "auto", color: "#FF6EC7", fontWeight: "bold"}}>OR</Typography>
        <Button
            onClick={handleClose}
            variant="text"
            startIcon={<GoogleIcon />}
          >
            Login With Google Account
          </Button>
        <Image
            src="https://i.gifer.com/embedded/download/921j.gif"
            height="112px"
            sx={{ border: "2px solid #FF6EC7", borderRadius: '19px', margin: "10px 10px"}}
          />
          <DialogActions>
          <Chip
        label="Don't have an account ? please Sign Up here"
        component="a"
        href="#basic-chip"
        variant="outlined"
        sx={{color: '#FF6EC7', fontWeight: "bold", backgroundColor: "#D1EAF0"}}
        clickable
      />
          </DialogActions>
      </Dialog>
    </div>
  );
}
