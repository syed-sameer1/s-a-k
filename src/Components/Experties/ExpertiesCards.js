import React from "react";
import "../Home/LegalServices/LegalServices.css";
import ServicesCard from "../Home/LegalServices/ServicesCard/ServicesCard";
import bookIcon from "../../asseset/images/book.png";
import webIcon from "../../asseset/images/language.png";
import gavelIcon from "../../asseset/images/gavel.png";
import courtIcon from "../../asseset/images/court.png";
import family from "../../asseset/images/family-room.png";
import bank from "../../asseset/images/bank.png";
import civil from "../../asseset/images/civil-right.png";

const ExpertiesCards = () => {
  return (
    <div className="LegalServices" style={{ marginTop: "40px" }}>
      <h2>Areas Of Experties</h2>
      <div className="ServicesCards">
        <ServicesCard
          ServiceName="Dispute Resolution"
          ServiceDetail="Dispute Resolution or Alternative Dispute Resolution (ADR) as it is often called is an extensive method used for resolving legal matters outside the Court. ADR is not only less costly but also more expeditiously."
          icon={bookIcon}
          details="Our team of devoted and enthusiastic professional lawyers best assist their valuable clients as to resolution of disputes in Pakistan as well as internationally. Seema, Abidi, Khan & Associates has been successfully providing services of such nature since its inception, with its network of professional mediators, arbitrators, administrators and training staff, in a wide range of matters such as insurance industry, private businesses, family matters government agencies, etc..
          "
        />
        <ServicesCard
          ServiceName="Constitutional Law"
          ServiceDetail="Constitutional law refers to that law that is considered as the most fundamental, most supreme and ultimate law of the country with which no other law can contradict. It not only sets out the fundamental rights and duties."
          icon={webIcon}
          details="SAK has been recognized as an “eminent constitutional litigation practice firm.” Since practice of Constitutional law is one of the core areas of expertise at SAK, team of lawyers at SAK is not only trained and experienced in dealing with constitutional matters but through their regular appearances before Superior Court of Pakistan has also been successfully obtaining reliefs for the clients who have been wronged by some other person or government functionaries. "
        />
        <ServicesCard
          ServiceName="Banking Law"
          ServiceDetail="Financial institutions of the country are the basis on which pillars of country’s economy is built. However, these financial institutions, and in turn their valuable customers, have to follow a myriad of federal and provincial laws so as to govern their day to day activities and their relationships with their customers."
          icon={bank}
          details="In this regard, SAK is considered as an all rounder when it comes to laws relating to banking law. It not only provides specialist advice in relation to the full spectrum of financial products including but not limited to basic lending and borrowing transactions, leveraged and acquisition finance, insolvent & re-structuring and structured finance, etc. The firm is also experienced in proceeding trials before both tribunals such as Banking Courts as well as Superior Courts."
        />
        <ServicesCard
          ServiceName="Family Law"
          ServiceDetail="Laws in Pakistan are based on English as well as Islamic Law with the latter heavily influencing the field of Family Law. It is one of the broad practice areas, which not only involves and focuses on resolving matters relating."
          icon={family}
          details="Since each family law case is unique, SAK strive its best to provide speedy relief to its clients. In this regard, it has a treasure of ‘reported’ as well as ‘un-reported’ precedents of apex Courts which are obtained by way of exercising some serious efforts.  It ensures personal interest in every case and all the cases it institutes or defends are thoroughly checked and filed with complete satisfaction of its client after thorough reading of the relevant laws and precedents."
        />
        <ServicesCard
          ServiceName="Civil Litigation/ Corporate Law"
          ServiceDetail="SAK, with regards to Civil and Corporate law, is regarded as a highly successful and eminent firm by other clients as well as leaders in the fraternity. This field of law includes a variety of matters ranging from land matters."
          icon={civil}
          details="The team of our experienced and well-skilled lawyers at SAK is well suited not only for litigating matters but for also providing comprehensive advices with regards to technical and complicated matters since general civil and corporate law are the mainstay of the firm. The firm has handled virtually every kind of litigation imaginable - for individuals and for institutions. Some of the valuable clients of SAK include brands such as Dunkin Donuts, ICI, Habitt, Unique & Unique (Contractors & Interior Decorators)."
        />
        <ServicesCard
          ServiceName="Public Interest Litigation"
          ServiceDetail="Public interest litigation includes myriad kinds of litigation within it scope ranging from health and safety, environmental issues, road safety, to protection of fundamental human rights like freedom of religion."
          icon={courtIcon}
          details="Our firm’s experience of several decades combined with its expertise and skills in the field of Public Interest Litigation are the most crucial and promising things that separates SAK from other law firms existing in Pakistan. From filing and contesting of petitions, securing government lands from illegal allotments, protecting forest land, environment issues, educational fee matters, parking mafias, etc."
        />
        <ServicesCard
          ServiceName="Tort Law"
          ServiceDetail="Although Tort Law comes within the ambit of Civil Law, however, since it includes myriads of legal claim, it is considered as a separate field of law. It is that civil wrong, which is concerned with an aggrieved party seeking."
          icon={gavelIcon}
          details="A person who commits the tortious act is called tortfeasor. Moreover, claims under tort law are not limited to physical injuries only, in fact, an aggrieved party can claim compensation even for emotional, economical or even reputational injuries. SAK is not only one of the foremost and experienced firms in dealing with tortuous claims, but also has handled various high profiles and media hyped cases in this regard."
        />
        <ServicesCard
          ServiceName="Intellectual Property (IP)"
          ServiceDetail="Any creation of mind or invention such as design, symbol, image, phrase or even music or literature can be owned by a person or a company, use of which by someone else would be considered as illegal – this legal."
          icon={bookIcon}
          details="The law firm of SAK offers comprehensive services in this regard since most of its practice leans in this field of law. Be it trade mark registrations, patent applications, copyrights infringement or franchising, advocates at SAK serves its clients at every stage of the process including litigation for infringement of IP Laws so as to ensure that its clients get the best of what they want for the smooth running of their operations. With regards to IP Law, SAK has not only worked for local or national companies but have also provided its world class services to multi-national corporations thereby making their work easier for them."
        />
        <ServicesCard
          ServiceName="Criminal Law"
          ServiceDetail="Peace and tranquility are extremely crucial in order to avoid vengeance and chaos in a society; this aspect of living has, in turn, allowed for a body of law namely Criminal Law to be formed, a body of law worthy of separate attention."
          icon={gavelIcon}
          details="Peace and tranquility are extremely crucial in order to avoid vengeance and chaos in a society; this aspect of living has, in turn, allowed for a body of law namely Criminal Law to be formed, a body of law worthy of separate attention. Today, the field of Criminal has become one of the most significant and most extreme fields of practices in law covering all those aspects that entail crime and criminal offences as its factors. This field of law not only proscribes the conduct which is considered as threatening and endangering to human or property."
        />
        <ServicesCard
          ServiceName="Employment, Labor and Service Laws"
          ServiceDetail="These laws contain a thorough and authentic guide in form of several Ordinances, Acts, Rules & Regulations for the concerned agencies to realize their respective roles and responsibilities and to become aware of their prescribed legal rights to be asserted."
          icon={gavelIcon}
          details="Employment, Labor and Service Laws are few of the most important, well versed and comprehensive laws in a legal system. They not only govern the relationship between employer employees, workers or laborers but also set out a basic guideline that allows people in different roles or position such as employer, labor, employee, etc. to work, hire, terminate or regulate accordingly. This broad field of law also deals with resolving issues or disputes such as wrongful termination, etc. "
        />
        <ServicesCard
          ServiceName="Custom Law"
          ServiceDetail="Field of Custom Law comes into play when imports and exports of goods are involved. Although the field is more fiscal related in nature, still it is seen as one of the prominent and growing fields over the span of time."
          icon={gavelIcon}
          details="Field of Custom Law comes into play when imports and exports of goods are involved. Although the field is more fiscal related in nature, still it is seen as one of the prominent and growing fields over the span of time. Custom duty in Pakistan is based on International Harmonized System and is levied on ad-valorem basis meaning thereby that it is estimated in proportion to the value of the goods and transaction concerned."
        />
        <ServicesCard
          ServiceName="Rent Law"
          ServiceDetail="Issues relating to fixation of fair rent, ejectment proceedings, rights duties of landlord and tenants, etc. comes within the ambit of Rent Law. The governing law of rent related disputes between landlords and tenants in Sindh is Sindh Rented Premises Ordinance, 1979."
          icon={gavelIcon}
          details="Advocates at SAK started their law firm by providing services in rent matters, including but not limited to, drafting rent agreements, fixation of fair rent, filing and defending ejectment proceedings, discontinuance of amenities and services, deposit of rent in Courts, etc. Today, the firm has dealt with more than 100 rent cases both by resolving the issues amicably or contesting the litigation before Courts. Moreover, our team is even highly capable of contesting these litigations before Rent Controllers."
        />
        <ServicesCard
          ServiceName="Consumer Protection Law"
          ServiceDetail="Whenever a person buys a product, which then turns out to be defective, the said person has ample of rights under the legal system of Pakistan, which not only protects that person from suffering loss from such events but also compensates him/her for the loss suffered by him/her."
          icon={gavelIcon}
          details="The law of Consumer Protection came into being in Pakistan when the Federal Government passed Islamabad Consumer Protection Laws in 1995, soon afterwards, the Provincial Government, following in the footsteps of the Federal Government, passed their own Consumer Protection Laws thereby ensuring a prosperous and a thriving society wherein consumers feel secured and safe from unfair trade practices and fraudulent acts of corporations."
        />
      </div>
    </div>
  );
};

export default ExpertiesCards;
