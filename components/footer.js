import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const navigation = [
    {
      title: 'Accueil ',
      link: '/'
    },
    {
      title: 'Nos missions',
      link: '#noMissions'
    },
    {
      title: 'Nos réalisations',
      link: '#noRealisations'
    },
  ];
  
  return (
    <section className="relative ">
      <section>
        <div className="w-[82vw] mx-auto grid  grid-cols-1 gap-10 pt-10 mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2 ">
            <div className="">
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <Image
                      src="/img/logo.png"
                      alt="N"
                      width="100"
                      height="50"
                      className="w-20"
                    />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            ETANCHE N.E est réputée pour son intégrité, son professionnalisme, sa rapidité d’exécution
            et surtout sa réactivité sur tout le territoire national.

            </div>

          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href={item.link} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-brownLight focus:outline-none dark:focus:bg-trueGray-700">                 
                    {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div>Contact</div>
            <div className="flex flex-col w-full mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                hre f="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener">
                <span>Lot II E DJ Bis Tsarahonenana ANTANANARIVO 101 </span>
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener">
                <span>032 02 320 98 – 034 15 611 89 </span>
              </a>
              
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener">
                <span className=" underline">noel.etancheite@gmail.com </span>
              </a>
            </div>
          </div>
        </div>

        <div className="my-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} 
        </div>
      </section>
    </section>
  );
}

