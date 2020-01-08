import React from "react";
import ClientsHeader from "./ClientsHeader";
import ClientsCards from "./ClientsCards";
import OtherClients from "./OtherClients";

import "./Clients.css";

const Clients = () => {
  return (
    <div>
      <ClientsHeader team="Clients" />
      <ClientsCards />
      <div className="other_clients">
        <h2>Other Valuable Clients</h2>
        <div className="clients_list">
          <OtherClients clientName="Allied Bank Ltd" />
          <OtherClients clientName="Habib Education Trust" />
          <OtherClients clientName="Pakistan General Insurance Company" />
          <OtherClients clientName="Unique & Unique (Contractors & Interior Decorators)" />
          <OtherClients clientName="The Technomist – Mechanical Engineering Firm" />
          <OtherClients clientName="DS-Concept Factoring GmbH (Tradewind)" />
          <OtherClients clientName="E-Ocean (Pvt.) Ltd" />
          <OtherClients clientName="AAA (Pvt.) Ltd" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
