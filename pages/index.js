import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm"
import { Carousels } from "../components/carousel";
import SectionTitle from "../components/sectionTitle";
import Image from "next/image";
import { missionsData } from "../data/data";

const Home = () => {
  return (
    <>
      <Head>
        <title>Etanche construction</title>
        <meta
          name="Etanche construction"
          content="Etanche construction"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />
      
      <section id="noMissions" className="pt-4">
        <SectionTitle title="Nos missions" children={(
          <>
            <span>
            Afin de faire plus amples connaissances avec notre entreprise, nous vous invitons à découvrir
            le pur professionnalisme, nos spécialités et compétences. 
            </span>
          </>)} />

        <div className="bg-[#f8f5f1] mt-14 ">
          <Benefits data={missionsData} />
        </div>
      </section>

      <section id="noRealisations">
        <SectionTitle title="Nos réalisations" />
        <Carousels />
      </section>

      <SectionTitle title="Nos contacts" />
      <ContactForm />

      <Footer />
    </>
  );
}

export default Home;