import React from "react";
import { Divider, Grid } from "@material-ui/core";
import "./index.css";
import phoneIcon from "../../assets/icones/ICONE_TEL_K90.png";
import whatsIcon from "../../assets/icones/ICONE_WHATS_K90.png";
import mailIcon from "../../assets/icones/ICONE_MAIL_K90.png";

export default function Contact() {
  return (
    <div className="contact_area">
      <Grid container justify="center" id="contato">
        <Grid item xs={12}>
          <p className="contact_section_title">Entre em contato</p>
        </Grid>
        <Grid
          item
          xs={12}
          md={11}
          xl={10}
          container
          justify="space-between"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={3}>
            <p className="title_card_contact">Santa Catarina</p>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={phoneIcon}
                  alt="Icone de telefone"
                />
                <span className="text_card_contact">(47) 3310-0137</span>
              </div>
            </center>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={whatsIcon}
                  alt="Icone do Whatsapp"
                />
                <span className="text_card_contact">(47) 99714-9995</span>
              </div>
            </center>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={mailIcon}
                  alt="Icone do E-mail"
                />
                <span className="text_card_contact">
                  gerencia@integralse.com.br
                </span>
              </div>
            </center>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p className="title_card_contact">Rio Grande do Sul</p>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={phoneIcon}
                  alt="Icone de telefone"
                />
                <span className="text_card_contact">(51) 3279-5144</span>
              </div>
            </center>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={mailIcon}
                  alt="Icone do E-mail"
                />
                <span className="text_card_contact">
                  gerencia@integralse.com.br
                </span>
              </div>
            </center>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p className="title_card_contact">REURB</p>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={phoneIcon}
                  alt="Icone de telefone"
                />
                <span className="text_card_contact">(47) 3310-0136</span>
              </div>
            </center>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={whatsIcon}
                  alt="Icone do Whatsapp"
                />
                <span className="text_card_contact">(47) 99714-9995</span>
              </div>
            </center>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={mailIcon}
                  alt="Icone do E-mail"
                />
                <span className="text_card_contact">
                  gerencia@integralse.com.br
                </span>
              </div>
            </center>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p className="title_card_contact">TARS</p>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={phoneIcon}
                  alt="Icone de telefone"
                />
                <span className="text_card_contact">(47) 3310-0136</span>
              </div>
            </center>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={whatsIcon}
                  alt="Icone do Whatsapp"
                />
                <span className="text_card_contact">(47) 99714-9995</span>
              </div>
            </center>
            <center>
              <div
                style={{
                  width: "100%",
                  display: "inline",
                }}
              >
                <img
                  className="icone_contact"
                  src={mailIcon}
                  alt="Icone do E-mail"
                />
                <span className="text_card_contact">
                  gerencia@integralse.com.br
                </span>
              </div>
            </center>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
