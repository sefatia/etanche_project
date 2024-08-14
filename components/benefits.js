import Image from "next/image";
import React from "react";

const Benefits = (props) => {
  const { data } = props;


  return (
    <>
     {data.map((benefit, index) => (

       <section className="flex flex-wrap lg:mb-20 w-[82vw] mx-auto py-8 lg:gap-10 lg:flex-nowrap " key={index}>
        <div
          className={`flex items-center  justify-center w-full  lg:w-1/2 ${
            index % 2 === 0 ? "" : "order-1 lg:order-2 "
          }`}>
          <div className="w-full">
            <Image
              src={benefit.image}
              width="400"
              height="auto"
              alt="Benefits"
              className={"object-cover "}
              placeholder="blur"
              blurDataURL={benefit.image.src}
            />
            <div className="bg-white shadow ps-1 w-auto lg:w-[400px] py-1 text-primary">{benefit.description}</div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-full lg:ms-24 ${
            index % 2 === 0 ? "justify-center lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4 ">
              <h3 className="lg:max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {benefit.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {benefit.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {benefit.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
       </section>
     ))}
     
    </>
  );
};

function Benefit(props) {
  return (
    <>
        <div>
          <ul className="text-xl font-medium text-gray-800 dark:text-gray-200 list-disc ms-10">
            <li> {props.title}</li>
          </ul>
        </div>
    </>
  );
}

export default Benefits;
