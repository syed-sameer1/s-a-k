import React from "react";
import ClientsHeader from "./ClientsHeader";
import ClientsCards from "./ClientsCards";
import OtherClients from "./OtherClients";
import KE from "../../asseset/images/clients_images/ke_logo.png";
import alNoor from "../../asseset/images/clients_images/al-noor.png";
import concept from "../../asseset/images/clients_images/Ds_concept.png";
import eOcean from "../../asseset/images/clients_images/e-ocean.png";

import "./Clients.css";

const Clients = () => {
  return (
    <div>
      <ClientsHeader team="Clients" />
      <ClientsCards />
      <div className="other_clients">
        <h2>Areas Of Experties</h2>
        <div className="clients_list">
          <OtherClients clientName="K-Electric" />
          <OtherClients clientName="Al-Noor Sugar Mills" />
          <OtherClients clientName="Allied Bank Ltd" />
          <OtherClients clientName="Habib Education Trust" />
          <OtherClients clientName="Pakistan General Insurance Company" />
          <OtherClients clientName="Unique & Unique (Contractors & Interior Decorators)" />
          <OtherClients clientName="Karachi Chamber of Commerce and Industry" />
          <OtherClients clientName="Rizvia Cooperative Housing Society Ltd" />
          <OtherClients clientName="The Educators" />
          <OtherClients clientName="The Technomist – Mechanical Engineering Firm" />
          <OtherClients clientName="Pak Qatar Takaful/Insurance" />
          <OtherClients clientName="Pak Moharram Association" />
          <OtherClients clientName="DS-Concept Factoring GmbH (Tradewind)" />
          <OtherClients clientName="K-Electric" />
          <OtherClients clientName="E-Ocean (Pvt.) Ltd" />
          <OtherClients clientName="Al-Noor Sugar Mills" />
          <OtherClients clientName="AAA (Pvt.) Ltd" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
