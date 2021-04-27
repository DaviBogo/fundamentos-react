import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import integral_logo from "../../assets/logos/INTEGRAL_LOGO.png";
import icone_facebook from "../../assets/icones/icone_fb_branco.png";
import icone_instagram from "../../assets/icones/icone_ig_branco.png";
import "./index.css";

const AppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item xs={3} sm={2} md={1}>
          <img
            alt="Logo da Integral"
            className="logo_integral"
            src={integral_logo}
          />
        </Grid>
        <span orientation="vertical" className="divider_appbar"></span>
        <Grid item xs={2} sm={2} md={1} container justify="space-around">
          <Grid item xs={3} sm={3} md={3}>
            <a
              href="https://www.facebook.com/integralsengenharia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                alt="Link da página da Integral no Facebook"
                className="icone_rede_social"
                src={icone_facebook}
              />
            </a>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <a
              href="https://www.instagram.com/integral.se/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                alt="Link da página da Integral no Instagram"
                className="icone_rede_social"
                src={icone_instagram}
              />
            </a>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={7} md={9} container justify="flex-end">
            <Grid item sm={3} md={2}>
              <a className="btnMenu" href="#home">
                HOME
              </a>
            </Grid>
            <Grid item sm={3} md={2}>
              <a className="btnMenu" href="#reurb">
                REURB
              </a>
            </Grid>
            <Grid item sm={3} md={2}>
              <a className="btnMenu" href="#tars">
                TARS
              </a>
            </Grid>
            <Grid item sm={3} md={2}>
              <a className="btnMenu" href="#contato">
                CONTATOS
              </a>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={5} container justify="flex-end">
            <Grid item xs={6}>
              <Button
                variant="text"
                onClick={handleClick}
                startIcon={<MenuIcon />}
                style={{ color: "white" }}
              >
                Menu
              </Button>
            </Grid>
          </Grid>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <a href="#home" className="menuItem">
              <MenuItem onClick={handleClose}>Início</MenuItem>
            </a>
            <a href="#reurb" className="menuItem">
              <MenuItem onClick={handleClose}>Reurb</MenuItem>
            </a>
            <a href="#tars" className="menuItem">
              <MenuItem onClick={handleClose}>TARS</MenuItem>
            </a>
            <a href="#contato" className="menuItem">
              <MenuItem onClick={handleClose}>Contato</MenuItem>
            </a>
          </Menu>
        </Hidden>
      </Grid>
    </header>
  );
};

export default AppBar;
