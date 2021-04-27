import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import "./index.css";

export default function MonitoringProcess() {
  const [city, setCity] = useState("dona_emma");

  function handleConferir() {
    switch (city) {
      case "dona_emma":
        window.open("http://134.122.6.111");
        break;
      case "mirim_doce":
        window.open("http://142.93.124.33");
        break;
      default:
        window.open("http://165.22.42.14");
    }
  }

  return (
    <div className="background_monitoring_process">
      <Grid container justify="center">
        <Grid item xs={12} style={{ marginBottom: 32 }}>
          <h4 className="monitoring_process_section_title">
            Confira como está o seu processo de REURB
          </h4>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Grid item xs={9} sm={6} md={3}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Selecione sua cidade
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label="Selecione sua cidade"
                fullWidth
              >
                <MenuItem value="dona_emma">Dona Emma</MenuItem>
                <MenuItem value="mirim_doce">Mirim Doce</MenuItem>
                <MenuItem value="salete">Salete</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <Button
              variant="contained"
              onClick={handleConferir}
              className="buttonConferir"
            >
              Conferir
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
