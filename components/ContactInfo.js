
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
export const ContactInfo = () => {
    return (
        <div className="md:none w-full bg-gradient-to-r from-secondary to-primary ">
            <div className="grid grid-row gap-8 place-content-center my-8 p-4 lg:p-2 text-white ">
              <h4 className="text-4xl hidden lg:visible">Contact</h4>
              <p className="text-xl sm:mt-2">Nous sommes à votre disposition pour toute demande ou question.</p>
              <div className="flex gap-5 items-center">
                  <div className="bg-white text-primary p-1 rounded">
                    <Icon icon="system-uicons:location" className="text-3xl"/>
                  </div>
                  <div className="text-xl">Lot II E DJ Bis Tsarahonenana ANTANANARIVO 101</div>
              </div>
              <div className="flex gap-5 items-center">
                  <div className="bg-white text-primary p-1 rounded">
                    <Icon icon="ic:round-phone" className="text-3xl"/>
                  </div>
                  <div className="text-xl">032 02 320 98 – 034 15 611 89 </div>
              </div>
              <div className="flex gap-5 items-center">
                  <div className="bg-white text-primary p-1 rounded">
                    <Icon icon="material-symbols:mail-outline" className="text-3xl"/>
                  </div>
                  <div className="text-xl">noel.etancheite@gmail.com </div>
              </div>
              
              <div className="flex gap-5 items-center">
                  <div className="bg-white text-primary p-1 rounded">
                    <Icon icon="tabler:clock-hour-5" className="text-3xl"/>
                  </div>
                  <div className="text-xl">Heures d'ouverture Lundi - Vendredi: 8h - 17h</div>
              </div>
            </div>
          </div>
    )
}