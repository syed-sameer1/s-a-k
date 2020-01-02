import React from "react";
import "./LegalServices.css";
import ServicesCard from "./ServicesCard/ServicesCard";
import bookIcon from "../../../asseset/images/book.png";
import webIcon from "../../../asseset/images/language.png";
import gavelIcon from "../../../asseset/images/gavel.png";
import courtIcon from "../../../asseset/images/court.png";

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
          details="Let's say you end up getting accused of a crime, which you did not commit. However, now you are facing the fact that you need some sort of legal representation to assist you in court. Since court proceedings, legal terminology, and legal processes can be extremely confusing, it is important for you to have a lawyer or attorney to help navigate this process for you. This is what legal representation is. Essentially, legal representation refers to the whole process from start to finish in a lawyer fighting for you in court"
        />
        <ServicesCard
          ServiceName="Legal Advice"
          ServiceDetail="To get an opinion or research for a legal query, you can use this service. Your legal
          opinion will be prepared within a period of 2-3 working days. Please note that free legal consultation will
          not create any client and counsel relationship."
          icon={webIcon}
          details="To get an opinion or research for a legal query, you can use this service. Your legal
          opinion will be prepared within a period of 2-3 working days. Please note that free legal consultation will
          not create any client and counsel relationship, however if you engage us for furnishing our legal opinion
          or for conducting legal research on your behalf, we shall charge you accordingly."
        />
        <ServicesCard
          ServiceName="Legal Notice & Agreements"
          ServiceDetail="We can assist you in drafting deeds and
          agreements pertaining to your needs. We are further able to help you with the registration of documents
          and their formalities."
          icon={gavelIcon}
          details="We can assist you in drafting deeds and
          agreements pertaining to your needs. We are further able to help you with the registration of documents
          and their formalities"
        />
        <ServicesCard
          ServiceName="Legal Retainer"
          ServiceDetail="You can engage our firm on a yearly/monthly retainer so that you have legal help.
          We shall endeavor to ensure that our most suitable partner, supported by one associate is dedicated for
          you during the entire year."
          icon={courtIcon}
          details="You can engage our firm on a yearly/monthly retainer so that you have legal help.
          We shall endeavor to ensure that our most suitable partner, supported by one associate is dedicated for
          you during the entire year. The key benefit of legal retainer service is cost-effectiveness because our
          client will pay a lump sum amount irrespective of the number of legal queries answered. Furthermore,
          individual legal opinion or reply to legal notice or reviewing legal documents will also be considered
          within the scope of retainer service and will not be charged separately"
        />
        <ServicesCard
          ServiceName="Dispute Resolution"
          ServiceDetail="You can engage our firm on a yearly/monthly retainer so that you have legal help.
          We shall endeavor to ensure that our most suitable partner, supported by one associate is dedicated for
          you during the entire year."
          icon={bookIcon}
          details="Dispute Resolution or Alternative Dispute Resolution (ADR) as it is often called is an extensive method used for resolving legal matters outside the Court. ADR is not only less costly but also more expeditiously. Unlike litigation, it also allows for the parties to peacefully co-exist and empowers and enables the participating parties to seek mutually acceptable and creative solutions, which they think would better meet their needs and resolve their issues. Today, ADR is more increasingly being used wherein a neutral and impartial third party is employed to aid and assist the participating parties to communicate, develop ideas and absolve their dispute."
        />
      </div>
    </div>
  );
};

export default LegelServices;
