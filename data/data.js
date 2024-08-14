import React from "react";
import etancheTerrasseJardin from "../public/img/etanche_terasse_jardin.jpg";
import etancheTerrasse from "../public/img/etanche_terrasse.jpg";
import piscine from "../public/img/piscine.jpg";
import missions from "../public/img/missions.jpg";
import jardinEtancheite from "../public/img/etancheite_jardin.jpg";
import piscineRealisation from "../public/img/piscine_realisation.jpg";

const missionsData = [
  {
    title: "Etanchéité terrasse",
    desc: "ETANCHE.NE vous offre plusieurs solutions en d’étanchéité pour garantir votre confort et répondre convenablement à vos besoins. Nous maîtrisons très bien :  ",
    image: etancheTerrasseJardin,
    description: 'Etanchéité pour terrasse végétalisée',
    bullets: [
      {
        title: "L’étanchéité pour une toiture végétalisée",
      },
      {
        title: "L’étanchéité pour une terrasse accessible, balcon, coursive, escalier, rampe, … ",
      },
      {
        title: "L’étanchéité des toitures avec ou sans isolation thermique",
      },
      {
        title: "L’étanchéité chéneaux ",
      },
      {
        title: "L’étanchéité mur enterré ",
      },
    ],
  },
  {
    title: "Piscine",
    desc: "Qui ne rêve pas d’avoir une piscine chez soi ?....... Nous sommes là pour réaliser vos rêves en matière de construction de piscine ou bien pour une certaine rénovation et réparation.",
    image: piscine,
    description: 'Piscine à deux bassins',
    bullets: [
    ],
  },
  {
    title: "Bâtiments",
    desc: " ETANCHE.NE et ses équipes sont ravis d’être à votre service pour des travaux de construction, réhabilitation, rénovation et extension de bâtiments.",
    image: missions,
    description: 'Rénovation toiture',
    bullets: [
    ],
  },
]

const dataCarousel = [
  {
    title: "SOCIETE AKANJO AMBATOMARO",
    description: "Etancheite toiture terrasse avec isolation thermique, ayant une surface de 3 000m² effectuée le 28 Juin 2024.",
    image: etancheTerrasse
  },
  {
    title: "VICTORIA PLAZZA",
    description: "Etancheite en bardeau, d'une surface de 225m² sur un support en bois, le 22 avril 2024",
    image: missions
  },
  {
    title: "VILLA DABEZIE",
    description: "Sur une surface de 75m², ETANCHE.NE a realisé une étanchéité pour une terrasse végétalisée pour un client particulier,le 21 mars 2024 ",
    image: jardinEtancheite
  },
  {
    title: "PISCINE LOTUS",
    description: "Une piscine pour l'hotel LOTUS ",
    image: piscineRealisation
  },
  {
    title: "TRAVAUX DE RENOVATION",
    description: "Il s'agit des travaux de rénovation de la toiture de l'Institut Pasteur de Madagascar sis à Avaradoha, effectué le 05 février 2024",
    image: missions
  },
  
]


export { missionsData, dataCarousel};
