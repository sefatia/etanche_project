import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting },
      } = useForm({
        mode: "onTouched",
      });
      const [isSuccess, setIsSuccess] = useState(false);
      const [Message, setMessage] = useState("");
    
      const userName = useWatch({ control, name: "name", defaultValue: "Someone" });
    
      const onSubmit = async (data, e) => {
        console.log(data);
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data, null, 2),
        })
          .then(async (response) => {
            let json = await response.json();
            if (json.success) {
              setIsSuccess(true);
              setMessage(json.message);
              e.target.reset();
              reset();
            } else {
              setIsSuccess(false);
              setMessage(json.message);
            }
          })
          .catch((error) => {
            setIsSuccess(false);
            setMessage("Client Error. Please check the console.log for more info");
            console.log(error);
          });
      };
    return (
        <div className="md:flex lg:flex gap-x-3 h-full overflow-auto w-full bg-gray-50  " id="contactForm">
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
          <div className="w-full px-4 my-5">
                <span className="flex justify-center space-x-2 text-2xl font-medium  ">
                    <Image
                      src="/img/logo.png"
                      alt="N"
                      width="100"
                      height="50"
                      className="w-28 mx-8 py-2"
                    />
                </span>
              <div>
                <h3 className="text-3xl "> Envoie-nous un message</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                  type="hidden"
                  value="YOUR_ACCESS_KEY_HERE"
                  {...register("apikey")}
                />
                <input
                  type="hidden"
                  value={`${userName} sent a message from Nextly`}
                  {...register("subject")}
                />
                <input
                  type="hidden"
                  value="Nextly Template"
                  {...register("from_name")}
                />
                <input
                  type="checkbox"
                  className="hidden"
                  style={{ display: "none" }}
                  {...register("botcheck")}></input>

                <div className="mb-4">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Veuillez entrez votre nom",
                      maxLength: 80,
                    })}
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.firstname
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-gray-300 ring-indigo-100"
                    }`}
                  />
                  {errors.name && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                  
                <div className="mb-4">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Veuillez entrez votre prénom",
                      maxLength: 80,
                    })}
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.lastname
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-gray-300 ring-indigo-100"
                    }`}
                  />
                  {errors.name && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Entrer votre adresse email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Entrer une adresse email valide",
                      },
                    })}
                    placeholder="you@company.com"
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.email
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 ring-indigo-100"
                    }`}
                  />

                  {errors.email && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    id="message"
                    {...register("message", {
                      required: "Entrer votre message",
                    })}
                    placeholder="Your Message"
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-gray-300 ring-indigo-100"
                    }`}
                    required></textarea>
                  {errors.message && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.message.message}
                    </div>
                  )}
                </div>
                <div className="mb-3 flex justify-center">
                  <button
                    type="submit"
                    className="w-2/3 px-3 py-4 text-white  rounded-md focus:outline-none bg-gradient-to-r from-secondary to-primary">
                    {isSubmitting ? (
                      <svg
                        className="w-5 h-5 mx-auto text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </div>
              </form>
          </div>
        </div>
    )
};
export default ContactForm