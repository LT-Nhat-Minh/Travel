import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import logo from "./Logo.png";
import "./style.scss";

HeadBar.propTypes = {};

function HeadBar(props) {
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
    <div>
      <div className="headBar">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo.png" style={{ height: "80%" }} />
          </a>
        </div>
        <div>
          <button id="myCheckinBtn">Đặt chỗ của tôi</button>
          <button id="loginBtn" onClick={handleClickOpenLogin}>
            Đăng Nhập
          </button>
          <button id="signinBtn" onClick={handleClickOpenSignin}>
            Đăng ký
          </button>
        </div>
      </div>
      <Dialog
        open={login}
        PaperProps={{
          component: "form",
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
          <Button color="inherit" onClick={handleClickOpenLogin}>
            Đăng nhập
          </Button>
          <Button color="inherit" onClick={handleClickOpenSignin}>
            Đăng ký
          </Button>
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
          component: "form",
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
          <Button color="inherit" onClick={handleClickOpenLogin}>
            Đăng nhập
          </Button>
          <Button color="inherit" onClick={handleClickOpenSignin}>
            Đăng ký
          </Button>
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
    </div>
  );
}

export default HeadBar;
