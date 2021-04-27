import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import "./index.css";
import Ilustracao from "../../assets/icones/ILUSTRAÇÃO.png";

export default function OurPartners() {
  return (
    <Grid container justify="center" style={{ marginBottom: 90 }}>
      <Grid item xs={12} container direction="row" justify="center">
        <Grid item xs={10} style={{ marginBottom: 32 }}>
          <h1 className="title_our_partners">Nossa Equipe</h1>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10} md={12} style={{ marginBottom: 16 }}>
            <p className="subtitle_our_partners">
              Contamos com uma equipe de profissionais especializada em
              Regularização Fundiária:
            </p>
          </Grid>
          <Grid item xs={10} md={12} style={{ paddingLeft: 30 }}>
            <ul className="list_partners">
              <li>
                <span>Advogados;</span>
              </li>
              <li>
                <span>Arquitetos;</span>
              </li>
              <li>
                <span>Assistente Social;</span>
              </li>
              <li>
                <span>Engenheiros Sanitarista;</span>
              </li>
              <li>
                <span>Geólogo;</span>
              </li>
              <li>
                <span>Hidrólogo;</span>
              </li>
              <li>
                <span>Técnicos Agrimensor</span>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item md={5} container>
            <Grid item md={12}>
              <img
                alt="Ilustração de pessoas construindo um quebra cabeça"
                src={Ilustracao}
                className="ilustracao"
              />
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}
