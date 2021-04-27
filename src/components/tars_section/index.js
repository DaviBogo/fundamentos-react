import React from "react";
import { Grid } from "@material-ui/core";
import "./index.css";
import tars_logo from "../../assets/logos/tars_logo.png";

export default function tars() {
  return (
    <div className="tars_area">
      <div className="background_tars" id="tars">
        <Grid container justify="center">
          <Grid item xs={6} sm={4} md={3}>
            <img
              src={tars_logo}
              className="tars_logo"
              alt="Logo do serviço TARS"
            />
          </Grid>
          <Grid item xs={10}>
            <p className="tars_description">
              O TARS é um software de regularização fundiária que permite
              automação na análise e gestão dos projetos de REURB. A plataforma
              foi desenvolvida para prefeituras e visa solucionar todos os
              problemas relacionados aos processos de Regularização Fundiária,
              dispondo um acompanhamento em tempo real.
            </p>
          </Grid>
        </Grid>
      </div>
      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <iframe
            className="tars_video"
            src="https://www.youtube.com/embed/2lBCqo3XKKQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
