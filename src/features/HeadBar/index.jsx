import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import logo from "./Logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

HeadBar.propTypes = {};

function HeadBar(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <button id="loginBtn" onClick={handleClickOpen}>
            Đăng Nhập
          </button>
          <button id="signinBtn" onClick={handleClickOpen}>
            Đăng ký
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle className="dialogTiltle">
          <button className="formLogin">Đăng Nhập</button>
          <button className="formSignin">Đăng Ký</button>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default HeadBar;
