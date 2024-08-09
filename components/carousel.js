
"use client";

import Carousel from "react-multi-carousel";
import etancheTerrasse from "../public/img/etanche_terrasse.jpg";
import piscine from "../public/img/piscine.jpg";
import missions from "../public/img/missions.jpg";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { dataCarousel } from "./data";
import { useState } from "react";
import { Modal } from "flowbite-react";

export function Carousels() {
  const [globalImage, setGlobalImage] = useState(null);
  const [openModal, setOpenModal] = useState(true);

  const handleClick = (image, title) => {
    setGlobalImage({image, title});
    setOpenModal(true)
  };

  return (
    <div className="w-[82vw] mx-auto py-10 -mt-4 -z-10 ">

        <Modal  show={openModal} size='md' onClose={() => setOpenModal(false)}>
        <Modal.Header>{globalImage && globalImage.title}</Modal.Header>
        <Modal.Body>
          {globalImage && (
            <div className="global-image-display">
              <Image
                src={globalImage.image}
                alt="realisation"
                className="w-[80vw] h-90"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
      <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={2000}
          centerMode={true}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={true}
          infinite={false}
          itemClass="mx-4 my-9 shadow-md rounded-md cursor-pointer "
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {dataCarousel.map((item, index) => (
            <section
              key={index} 
              onClick={() => handleClick(item.image, item.title)}
              >
                  <Image
                      src={item.image}
                      alt="N" 
                      className="w-full h-96 "
                  />
                 
                  <div className="!bg-white z-20 py-3">
                    <div className="px-2 mb-2 font-bold text-primary text-xl">
                        {item.title}
                    </div>
                    <div className="px-2">{item.description}</div>
                  </div>
            </section>
          ))}
        </Carousel>
    </div>
  );
}
