import React from "react";
import "../Home/LegalServices/LegalServices.css";
import ServicesCard from "../Home/LegalServices/ServicesCard/ServicesCard";
import nbp from "../../asseset/images/clients_images/NBP_logo.png";
import bankAlBaraka from "../../asseset/images/clients_images/bank_al_baraka.png";
import gradsy from "../../asseset/images/clients_images/gradsy2.png";
import iobm from "../../asseset/images/clients_images/Institute_of_Business_Management.png";
import faysal_bank from "../../asseset/images/clients_images/faysal-bank-logo.png";
import JS_bank from "../../asseset/images/clients_images/JS_bank.png";
import summit_bank from "../../asseset/images/clients_images/Summit-Bank.png";
import sindh from "../../asseset/images/clients_images/sindh.png";
import kcci from "../../asseset/images/clients_images/KCCI.jpg";
import rizvia from "../../asseset/images/clients_images/rivzvia-society.png";
import educators from "../../asseset/images/clients_images/the-educators-logo.png";
import qatar from "../../asseset/images/clients_images/pak-qatar.jpg";
import mauharam from "../../asseset/images/clients_images/pak-mauharam.jpeg";
import ke from "../../asseset/images/clients_images/ke_logo.png";
import noor from "../../asseset/images/clients_images/al-noor.png";

const ClientsCards = () => {
  return (
    <div className="LegalServices">
      <h2>Valuable Clients</h2>
      <div className="ServicesCards">
        <ServicesCard
          ServiceName="National Bank of Pakistan"
          ServiceDetail="National Bank of Pakistan (NBP) is a Pakistani government-owned commercial bank which is a subsidiary of State Bank of Pakistan. It is headquartered in Karachi, Pakistan. As of March 2017, it has 1,450 branches across Pakistan with assets of approximately USD 17.2 billion."
          icon={nbp}
          details="National Bank of Pakistan (NBP) is a Pakistani government-owned commercial bank which is a subsidiary of State Bank of Pakistan. It is headquartered in Karachi, Pakistan. As of March 2017, it has 1,450 branches across Pakistan with assets of approximately USD 17.2 billion.
          The bank provides both commercial and public sector banking services. It is a lead player in the debt-equity market, corporate investment banking, retail and consumer banking, agricultural financing, treasury services."
        />
        <ServicesCard
          ServiceName="Bank Al Baraka"
          ServiceDetail="Al Baraka (Pakistan) Limited (ABPL) came into being as a result of the first merger in the Islamic Banking sector of Pakistan. The merger took place between the branch operations of Al Baraka Islamic Bank (AIB) Bahrain."
          icon={bankAlBaraka}
          details="Al Baraka (Pakistan) Limited (ABPL) came into being as a result of the first merger in the Islamic Banking sector of Pakistan. The merger took place between the branch operations of Al Baraka Islamic Bank (AIB) Bahrain, Al Baraka Islamic Bank Pakistan (AIBP) and Emirates Global Islamic Bank (Pakistan), and thus from 1 November 2010, the operations of the merged entity began. The second merger took place in 2016 with Burj Bank Ltd. As of Sept 2016, the Bank has a national presence in Pakistan with a network of 191 branches in more than 97 cities across the country"
        />
        <ServicesCard
          ServiceName="Jahangir Siddiqui Bank"
          ServiceDetail="Jahangir Siddiqui Bank or JS Bank is based in Karachi, Sindh, Pakistan. JS Bank is a prominent, majority-owned subsidiary of Jahangir Siddiqui Group, with total revenue of around 562 million as of December 2018."
          icon={JS_bank}
          details="Jahangir Siddiqui Bank or JS Bank is based in Karachi, Sindh, Pakistan. JS Bank is a prominent, majority-owned subsidiary of Jahangir Siddiqui Group, with total revenue of around 562 million as of December 2018. JS Bank Limited currently owns 345 branches in 172 cities across the country as well as an International branch in Manama, Bahrain. It was established in 2007 as a result of the merger of two mega corporates (Jahangir Siddiqui Investment Bank Limited and American Express Bank Limited - Pakistan operations."
        />
        <ServicesCard
          ServiceName="Faysal Bank Limited"
          ServiceDetail="The Faysal Bank Limited is a Pakistani Islamic and commercial bank which is a subsidiary of Bahraini bank Ithmaar Bank. It is based in Karachi, Sindh, Pakistan. which was incorporated in Pakistan on October 3, 1994 as a public limited company under the Companies Ordinance, 1984."
          icon={faysal_bank}
          details="The Faysal Bank Limited is a Pakistani Islamic and commercial bank which is a subsidiary of Bahraini bank Ithmaar Bank. It is based in Karachi, Sindh, Pakistan. which was incorporated in Pakistan on October 3, 1994 as a public limited company under the Companies Ordinance, 1984.
          It is a publicly listed universal bank engaged in commercial, retail, corporate and islamic banking activities and based on a number of metrics i.e. branch network, asset base, deposit size etc. is positioned as one of the top-ten banks in Pakistan."
        />
        <ServicesCard
          ServiceName="Summit Bank"
          ServiceDetail="Summit Bank is a Pakistani retail bank which is a subsidiary of Mauritius investment company, Suroor Investment. It is based in Karachi, Pakistan. It has a branch network of 193 across Pakistan."
          icon={summit_bank}
          details="Summit Bank is a Pakistani retail bank which is a subsidiary of Mauritius investment company, Suroor Investment. It is based in Karachi, Pakistan. It has a branch network of 193 across Pakistan."
        />
        <ServicesCard
          ServiceName="The Institute of Business Management"
          ServiceDetail="The Institute of Business Management (IoBM)  also known as CBM is a private university and business school in Karachi, Pakistan. IoBM is composed of four colleges, the College of Business Management (CBM)."
          icon={iobm}
          details="The Institute of Business Management (IoBM)  also known as CBM is a private university and business school in Karachi, Pakistan. IoBM is composed of four colleges, the College of Business Management (CBM), the College of Economics and Social Development (CESD), the College of Computer Science and Information Systems (CCSIS) and the College of Engineering Sciences (CES)."
        />
        <ServicesCard
          ServiceName="Gradsy Institute of Business & Technology"
          ServiceDetail="GRADSY IS AFFILIATED WITH FEDERAL UNIVERSITY OF PAKISTAN & INSTITUTE OF CHARTERED ACCOUNTANTS OF PAKISTAN (ICAP)."
          icon={gradsy}
          details="GRADSY IS AFFILIATED WITH FEDERAL UNIVERSITY OF PAKISTAN & INSTITUTE OF CHARTERED ACCOUNTANTS OF PAKISTAN (ICAP)."
        />
        <ServicesCard
          ServiceName="Sindh Industrial and Trading State"
          ServiceDetail="In order to promote industrialization and create attractive conditions for industrialists, Government of Sindh established Sindh Industrial Trading Estates, in the year 1947. The object was to establish planned industrial areas where industrialists."
          icon={sindh}
          details="In order to promote industrialization and create attractive conditions for industrialists, Government of Sindh established Sindh Industrial Trading Estates, in the year 1947. The object was to establish planned industrial areas where industrialists, in the future, could have all their required and needed facilities such as land, road, railway, water supply, electricity, gas, telephone, godowns (warehouses), sanitation, drainage, residential areas for workers and other necessary public amenities."
        />
        <ServicesCard
          ServiceName="The Karachi Chamber of Commerce and Industry"
          ServiceDetail="They aim to improve Pakistan's business environment and economic well-being, especially in Karachi. They seek to provide advocacy and opportunity to their thousands of members. KCCI issues statements to the news media, making recommendations and expressing its views over current economic and financial issues in Karachi and Pakistan"
          icon={kcci}
          details="They aim to improve Pakistan's business environment and economic well-being, especially in Karachi. They seek to provide advocacy and opportunity to their thousands of members. KCCI issues statements to the news media, making recommendations and expressing its views over current economic and financial issues in Karachi and Pakistan"
        />
        <ServicesCard
          ServiceName="Rizvia Cooperative Housing Society"
          ServiceDetail="Rizvia Society is one of the neighbourhoods of Liaquatabad Town in Karachi, Sindh, Pakistan.[1] This neighbourhood is predominantly populated by Shiite Muslims.The majority of population migrated after independence from areas of Awadh, especially Lucknow, state in UP."
          icon={rizvia}
          details="Rizvia Society is one of the neighbourhoods of Liaquatabad Town in Karachi, Sindh, Pakistan. This neighbourhood is predominantly populated by Shiite Muslims.
          After the independence of Pakistan in 1947, Rizvia Colony was made by a school teacher of Sindh Madressah, Maulana Aneesul Hasnain, along with Advocate Qazalbash in 1948. Their concept was to provide plots exclusively to Shias, and not to people of other sects.
          The majority of population migrated after independence from areas of Awadh, especially Lucknow, state in UP."
        />
        <ServicesCard
          ServiceName="The Educators"
          ServiceDetail="The Educators. Established in 2002 in Pakistan, The Educators is a parallel private school network owned and operated by Beaconhouse that aims to impart a standardized quality of education across the nation at a tuition fee that is a fraction of the fee charged at Beaconhouse."
          icon={educators}
          details="The Educators. Established in 2002 in Pakistan, The Educators is a parallel private school network owned and operated by Beaconhouse that aims to impart a standardized quality of education across the nation at a tuition fee that is a fraction of the fee charged at Beaconhouse."
        />
        <ServicesCard
          ServiceName="Pak-Qatar Family Takaful Ltd"
          ServiceDetail="Pak-Qatar Family Takaful Ltd. ... Its International Takaful network includes offices in Karachi, Dubai, Kuala Lumpur and Luxembourg. Saving & Takaful Plan is a Shari'ah-compliant alternative to conventional insurance, offering a unique combination of saving, investment and protection.."
          icon={qatar}
          details="Pak-Qatar Family Takaful Ltd. ... Its International Takaful network includes offices in Karachi, Dubai, Kuala Lumpur and Luxembourg. Saving & Takaful Plan is a Shari'ah-compliant alternative to conventional insurance, offering a unique combination of saving, investment and protection.."
        />
        <ServicesCard
          ServiceName="K-Electric"
          ServiceDetail="K-Electric is a vertically integrated investor-owned utility managing all three key stages – generation, transmission and distribution – of producing and delivering energy to consumers. KE is a Pakistani electric supply company, based in Karachi, Sindh, Pakistan."
          icon={ke}
          details="K-Electric is a vertically integrated investor-owned utility managing all three key stages – generation, transmission and distribution – of producing and delivering energy to consumers. KE is a Pakistani electric supply company, based in Karachi, Sindh, Pakistan."
        />
        <ServicesCard
          ServiceName="Al-Noor Sugar Mills"
          ServiceDetail="Al-Noor Sugar Mills Limited was incorporated in Pakistan on August 08, 1969 as a public limited company under the Companies Act, 1913 (now Companies Act 2017). ... The principal activities of the Company are manufacturing sugar, medium density fiber (MDF) board, power generation and its sale."
          icon={noor}
          details="Al-Noor Sugar Mills Limited was incorporated in Pakistan on August 08, 1969 as a public limited company under the Companies Act, 1913 (now Companies Act 2017). ... The principal activities of the Company are manufacturing sugar, medium density fiber (MDF) board, power generation and its sale."
        />
        <ServicesCard
          ServiceName="Pak Moharram Association"
          ServiceDetail="The Pak Moharram Association was formed in 1948. The then commissioner of Karachi, A.T. Naqvi, issued to them the licence for the mourning procession. ... From Jehangir Park, the procession would move via Saddar, Radio Pakistan, Lighthouse, etc., eventually culminating at Hussainian Iranian."
          icon={mauharam}
          details="The Pak Moharram Association was formed in 1948. The then commissioner of Karachi, A.T. Naqvi, issued to them the licence for the mourning procession. ... From Jehangir Park, the procession would move via Saddar, Radio Pakistan, Lighthouse, etc., eventually culminating at Hussainian Iranian."
        />
      </div>
    </div>
  );
};

export default ClientsCards;
