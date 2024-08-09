import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  return (
    <>

      <section className="flex z-10 flex-wrap h-screen bg-banner">
        <section className="flex z-10 flex-wrap w-full h-screen absolute opacity-20  bg-black">
       </section>
        <Container className="flex items-center z-30  ps-10">
          <div className="mb-8 flex flex-col gap-6 space-y-2 text-white lg:w-2/3  ">
            <h1 className="text-5xl lg:text-inherit lg:text-6xl font-bold landing_page_heading leading-snug tracking-tight  lg:leading-tight  xl:leading-tight !text-white">
              " Tout pour l'etanchéité et la piscine "
            </h1>
         
            <p className="leading-snug landing_page_description"> 
               L’entreprise ETANCHE N.E, une entreprise, qui s’est implantée depuis 2010, devenue
            référence à Madagascar dans le secteur du bâtiment, spécialisée dans le domaine
            ETANCHEITE et PISCINE.
             
            </p>
            <div className="flex flex-col items-start space-3 sm:space-x-4 space-y-2 sm:items-center lg:flex-row">
              <a
                href="#contactForm"
                target="_blank"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-md ">
                Contactez-nous
              </a>
             <button className="flex gap-x-2 border-4 px-2 py-3 rounded-md border-primary">
              <Icon icon="ic:round-phone" className="text-2xl"/>
              <a className="font-bold">
                +261 34 15 611 89
              </a>
             </button>
            </div>
          </div>
        </Container>
      </section>
    
    </>
  );
}


export default Hero;