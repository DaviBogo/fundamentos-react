import React from "react";
import { Grid } from "@material-ui/core";
import Card from "../card";
import "./index.css";

function BeneficitsReurb() {
  return (
    <div className="reurbBenefitsArea">
      <Grid container justify="center">
        <Grid item xs={8} sm={6} className="reurbBenefitsTitle">
          <h1 className="reurb_section_title">VANTAGENS DO REURB</h1>
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
              content="A REURB é um processo 
                administrativo, a decisão 
                de conseguir regularizar 
                cabe ao prefeito e sua 
                equipe técnica."
              type="politico"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              content="Por ser um processo mais 
                ágil, o valor pelo serviço 
                é reduzido. Famílias de 
                baixa renda conseguem 
                isenção de impostos e taxas 
                de cartório."
              type="dinheiro"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              content="Os Índices urbanísticos 
                estabelecidos pelo plano 
                diretor não precisam, 
                necessariamente, ser 
                atendidos."
              type="resultados"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BeneficitsReurb;
