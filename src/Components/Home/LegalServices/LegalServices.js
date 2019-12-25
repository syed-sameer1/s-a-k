import React from "react";
import "./LegalServices.css";
import ServicesCard from "./ServicesCard/ServicesCard";
import bookIcon from "../.././../asseset/images/book.png";
import webIcon from "../.././../asseset/images/language.png";
import gavelIcon from "../.././../asseset/images/gavel.png";
import courtIcon from "../.././../asseset/images/court.png";

const LegelServices = () => {
  return (
    <div className="LegalServices">
      <h2>Legal Services</h2>
      <div className="ServicesCards">
        <ServicesCard
          ServiceName="Legal Representation"
          ServiceDetail="You can engage us for legal representation in court, tribunal or arbitration
          proceedings. Should you feel satisfied by our expertise and knowledge of law, you may engage us by
          executing a Power Vaklatnama. "
          icon={bookIcon}
        />
        <ServicesCard
          ServiceName="Legal Advise"
          ServiceDetail="To get an opinion or research for a legal query, you can use this service. Your legal
          opinion will be prepared within a period of 2-3 working days. Please note that free legal consultation will
          not create any client and counsel relationship."
          icon={webIcon}
        />
        <ServicesCard
          ServiceName="Legal Notices OR Agreements"
          ServiceDetail="We can assist you in drafting deeds and
          agreements pertaining to your needs. We are further able to help you with the registration of documents
          and their formalities."
          icon={gavelIcon}
        />
        <ServicesCard
          ServiceName="Legal Retainer"
          ServiceDetail="You can engage our firm on a yearly/monthly retainer so that you have legal help.
          We shall endeavor to ensure that our most suitable partner, supported by one associate is dedicated for
          you during the entire year."
          icon={courtIcon}
        />
        <ServicesCard
          ServiceName="Dispute Resolution"
          ServiceDetail="You can engage our firm on a yearly/monthly retainer so that you have legal help.
          We shall endeavor to ensure that our most suitable partner, supported by one associate is dedicated for
          you during the entire year."
          icon={bookIcon}
        />
      </div>
    </div>
  );
};

export default LegelServices;
