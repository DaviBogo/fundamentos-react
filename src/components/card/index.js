import React from "react";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import classNames from "classnames";
import "./index.css";
import IconePolitico from "../../assets/icones/ICONE_POLITICO.png";
import IconeDinheiro from "../../assets/icones/ICONE_DINHEIRO.png";
import IconeMaos from "../../assets/icones/ICONE_MAOS.png";
import IconeTempo from "../../assets/icones/ICONE_TEMPO.png";
import IconeProcesso from "../../assets/icones/ICONE_ANOTACAO.png";

function card(props) {
  return (
    <Card className="card">
      <CardContent>
        <div className="iconArea">
          {props.type === "politico" && (
            <img
              alt="icone político"
              className={classNames("icone", "icone_politico")}
              src={IconePolitico}
            />
          )}
          {props.type === "dinheiro" && (
            <img
              alt="icone dinheiro"
              className={classNames("icone", "icone_dinheiro")}
              src={IconeDinheiro}
            />
          )}
          {props.type === "resultados" && (
            <img
              alt="icone resultados"
              className={classNames("icone", "icone_resultados")}
              src={IconeMaos}
            />
          )}
          {props.type === "processo" && (
            <img
              alt="icone processo"
              className={classNames("icone", "icone_processo")}
              src={IconeProcesso}
            />
          )}
          {props.type === "tempo" && (
            <img
              alt="icone tempo"
              className={classNames("icone", "icone_tempo")}
              src={IconeTempo}
            />
          )}
        </div>
        {props.title && <h6 className="card_title">{props.title}</h6>}
        <p className="card_text">{props.content}</p>
      </CardContent>
    </Card>
  );
}

export default card;
