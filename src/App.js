import React from "react";
import { Hidden } from "@material-ui/core";
import Appbar from "./components/appbar";
import MainSection from "./components/main_section";
import WhatIsReurb from "./components/whats_is_reurb_section";
import BeneficitsReurb from "./components/reurb_benefits_section";
import OurPartners from "./components/our_partners_section";
import TarsSection from "./components/tars_section";
import TarsBenefitsSection from "./components/tars_benefits_section";
import MonitoringProcessSection from "./components/monitoring_process_section";
import Contact from "./components/contact_section";
import Footer from "./components/footer";

function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Appbar />
      <MainSection />
      <Hidden mdUp>
        <WhatIsReurb />
      </Hidden>
      <BeneficitsReurb />
      <OurPartners />
      <TarsSection />
      <TarsBenefitsSection />
      <MonitoringProcessSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
