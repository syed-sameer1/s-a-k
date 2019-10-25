import React from "react";
import "./About.css";
import photo from "../../asseset/images/photo.jpg";
import AboutHeader from "./AboutHeader";

const About = () => {
  return (
    <>
      <AboutHeader />
      <main>
        <div className="detail-start">
          <div className="photo">
            <img src={photo} alt="head" />
          </div>
          <div className="para">
            <h2>SEEMA, ABIDI, KHAN & ASSOCIATES</h2>
            <p>
              SEEMA, ABIDI, KHAN & ASSOCIATES is a leading Pakistan-based law
              firm working as a progressive and dynamic full service firm with
              help of a talent pool of some of the best Pakistani lawyers. The
              firm has its law chamber at Karachi and we provide seamless legal
              services. Beginning with a very modest setting, SAK has grown,
              over the years, both in size and reputation and has become a
              benchmark of quality amongst professional law firms in Pakistan
              providing legal services, in its core practice areas, throughout
              the country.
            </p>
            <p>
              We are a well established law firm in Pakistan which is popular
              and still growing in reputation both in the legal echelon as well
              as among a wide range of clients which include national and
              multinational organizations, banks, corporations, institutions and
              individuals. We provide cutting-edge and solution oriented legal
              services, including both litigation work and drafting of
              agreements, deeds, instruments and other documents, with a quick
              turnaround time in a broad spectrum of the areas of law including
              company/corporate/commercial law, contractual matters, service,
              property law, family law, administrative law, constitutional law,
              banking, banking offences, civil, family, criminal, rent laws,
              etc.
            </p>
          </div>
        </div>
        <div className="para">
          <p>
            The firm came into existence when Seema Wasim Law Associates and
            Abidi Law Associates decided to pool their resources so as to meet
            the expectations of our clients in a more proficient manner. We
            continue to follow the principle of “client first” in providing
            reliable and highly effective services and are convinced that the
            three basic pillars of our services i.e. professionalism,
            effectiveness and complexity of solutions for our clients are
            fundaments for any legal advisory
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
