import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import WhatIsReurb from "../whats_is_reurb_section";
import "./index.css";
import saiba_mais from "../../assets/icones/saiba_mais.gif";

function MainSection() {
  return (
    <div className="background" id="home">
      <Grid container justify="center">
        <Grid item xs={10}>
          <h1 className="title">A Integral</h1>
        </Grid>
        <Grid item xs={10}>
          <p className="subtitle">
            É uma empresa que Trabalha no setor habitacional com enfoque na
            Regularização Fundiária. Estamos há dois anos no mercado executando
            diversos trabalhos em Santa Catarina e Rio Grande do Sul. A Integral
            desenvolveu também um software de regularização fundiária, que
            auxilia o município na análise de gestão de processos.
          </p>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 600 }}>
          <Grid container justify="center">
            <Grid item xs={3} sm={2} md={1}>
              <a
                href="#reurb"
                style={{
                  textDecoration: "none",
                }}
              >
                <img
                  alt="Botão saiba mais"
                  className="btnKnowMore"
                  src={saiba_mais}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <div style={{ marginTop: 100 }}>
          <WhatIsReurb />
        </div>
      </Hidden>
    </div>
  );
}

export default MainSection;
