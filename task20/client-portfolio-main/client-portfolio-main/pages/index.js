import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React from "react";
import Footer from "../components/footer";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import ContactUsSection from "../components/contactUs";
import ServicesSection from "../components/servicesSection";
import UpWidget from "../components/upWidget";
import InfoCard from "../components/InfoCard";
const Home = () => {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Big Time Boss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="lg:p-16 sm:p-4">
        <Hero />

        {/* <Benefits imgPos="right" data={benefitTwo} /> */}
        <InfoCard title="Mission">
          My mission is to organize & conduct detailed presentation of your work
          & help you make a lasting impact on your clients, fans & sponsors.
        </InfoCard>

        <InfoCard pretitle={"image"} title="About">
          I'm certified business & hip hop reporter, inventor & hip hop artist
          from chicago located in North Austin with Passion for improving lives
          & helping people each their full potential.
        </InfoCard>

        <ServicesSection />

        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq />
        <ContactUsSection />
        <Footer />
        <UpWidget />
        <PopupWidget />
      </div>
    </div>
  );
};

export default Home;
