import React from "react";
import { Grid } from "@material-ui/core";
import Card from "../card";
import "./index.css";

export default function TarsBenefits() {
  return (
    <div className="tars_benefits_area">
      <Grid container justify="center">
        <Grid item xs={8}>
          <h1 className="tars_benefits_title">VANTAGENS DO TARS</h1>
        </Grid>

        <Grid
          item
          xs={10}
          sm={8}
          md={10}
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={4}>
            <Card
              title="Informação dos processos"
              content="A tecnologia otimiza a 
              obtenção de informações
              sobre o andamento de um
              ou mais processos."
              type="processo"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              title="Tempo"
              content="O sistema centraliza
              e organiza os processos
              de REURB, auxiliando a
              análise e a aprovação."
              type="tempo"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              title="Documentos digitais"
              content="A prefeitura não precisará
              perder tempo em organizar,
              assegurar, transportar, ou 
              folhear documentos."
              type="politico"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
