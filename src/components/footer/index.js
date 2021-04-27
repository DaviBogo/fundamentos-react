import React from "react";
import { Grid } from "@material-ui/core";
import "./index.css";
import icone_facebook from "../../assets/icones/icone_fb_branco.png";
import icone_instagram from "../../assets/icones/icone_ig_branco.png";

export default function Footer() {
  return (
    <div className="background_footer">
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={1}
        className="footerContentArea"
      >
        <Grid item xs={12} sm={8} md={6}>
          <p className="footer_title">Nos acompanhe nas redes sociais!</p>
        </Grid>
        <Grid item xs={1}>
          <a
            href="https://www.facebook.com/integralsengenharia"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              alt="Link da página da Integral no Facebook"
              className="icone_rede_social_footer"
              src={icone_facebook}
            />
          </a>
        </Grid>
        <Grid item xs={1}>
          <a
            href="https://www.instagram.com/integral.se/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              alt="Link da página da Integral no Instagram"
              className="icone_rede_social_footer"
              src={icone_instagram}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
