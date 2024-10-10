import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "./style.scss"

export default function NavBar() {
  const [login, setLogin] = React.useState(false);

  const handleClickOpenLogin = () => {
    setLogin(true);
    handleCloseSignin();
  };

  const handleCloseLogin = () => {
    setLogin(false);
  };

  const [signin, setSignin] = React.useState(false);

  const handleClickOpenSignin = () => {
    setSignin(true);
    handleCloseLogin();
  };

  const handleCloseSignin = () => {
    setSignin(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={handleClickOpenLogin}>Đăng nhập</Button>
          <Button color="inherit" onClick={handleClickOpenSignin}>Đăng ký</Button>
        </Toolbar>
      </AppBar>

      <Dialog
        open={login}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseLogin();
          },
        }}
      >
        <DialogTitle>
        <Button color="inherit" onClick={handleClickOpenLogin}>Đăng nhập</Button>
          <Button color="inherit" onClick={handleClickOpenSignin}>Đăng ký</Button>
        </DialogTitle>
        <DialogContent className="dialogContent">
        <TextField id="loginEmail" label="Email" variant="outlined" />
        <TextField
          id="loginPsw"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button type="submit">Đăng nhập</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={signin}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseSignin();
          },
        }}
      >
        <DialogTitle>
        <Button color="inherit" onClick={handleClickOpenLogin}>Đăng nhập</Button>
        <Button color="inherit" onClick={handleClickOpenSignin}>Đăng ký</Button>
        </DialogTitle>
        <DialogContent className="dialogContent">
        <TextField id="loginEmail" label="Email" variant="outlined" />
        <TextField
          id="loginPsw"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="loginPsw_check"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
        <Button type="submit">Đăng ký</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignin}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
