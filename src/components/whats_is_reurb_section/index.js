import React from "react";
import { Grid, Typography } from "@material-ui/core";
import reurb_logo from "../../assets/logos/reurb_logo.png";
import "./index.css";

function WhatIsReurb() {
  return (
    <div className="reurbDescriptionSection">
      <Grid
        id="reurb"
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} sm={3} md={2}>
          <img
            alt="Logo do serviço Reurb"
            className="reurbLogo"
            src={reurb_logo}
          />
        </Grid>
        <Grid item xs={10} md={8}>
          <p className="reurbDescription">
            A Regularização Fundiária é um processo de transformação que promove
            a regularização de áreas urbanas e rurais ocupadas em desalinho com
            a lei, assim possibilita o direito social à moradia, a redução de
            desigualdades, a defesa do meio ambiente e a função social da
            propriedade e da cidade.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhatIsReurb;
