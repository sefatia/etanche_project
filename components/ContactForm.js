import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image"
import emailjs from "@emailjs/browser";
import { KEY_EMAILJS } from "../pages/constant/contact";
import { Loader } from "./loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { ContactInfo } from "./ContactInfo";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        watch,
        formState: { errors, isSubmitSuccessful, isSubmitting },
      } = useForm({
        mode: "onTouched",
      });
    
      const onSubmit = async (data) => {
        console.log(data);

        await emailjs.send(KEY_EMAILJS.serviceId, KEY_EMAILJS.templateId, data, KEY_EMAILJS.publicKey).then(
          (response) => {
            toast.success("Email envoyé avec succès !");
            reset()
          },
          (error) => {
            toast.error("Erreur! Email non envoyé !");
          },
        );
        if(isSubmitSuccessful){
          reset()
        }
      };
    return (
        <div className="md:flex lg:flex gap-x-3 h-full overflow-auto w-full bg-gray-50  " id="contactForm">
          <ContactInfo />

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
                <div className="mb-4">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder=""
                    {...register("lastname", {
                      required: "Veuillez entrez votre nom",
                      maxLength: 80,
                    })}
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.lastname
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-gray-300"
                    }`}
                  />
                  {errors.lastname && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.lastname.message}
                    </div>
                  )}
                </div>
                  
                <div className="mb-4">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder=""
                    {...register("firstname", {})}
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none `}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    {...register("phoneNumber", {
                      pattern: {
                        value: /^(?:\+261\d{9}|0(?:34|32|33|38)\d{7})$/,
                        message: "Entrer un numéro de téléphone valide",
                      },
                    })}
                    placeholder=""
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.phoneNumber
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-primary  ring-primary "
                    }`}
                  />

                  {errors.phoneNumber && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.phoneNumber.message}
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
                    placeholder=""
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.email
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-primary  ring-primary "
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
                      required: "Le contenu de votre message est obligatoire",
                    })}
                    placeholder="Votre message..."
                    className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:border-none   ${
                      errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-gray-300 ring-primary"
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
                      <span>
                        <Loader />
                        <span>Envoi en cours...</span>
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </div>
              </form>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
          />
        </div>
    )
};
export default ContactForm