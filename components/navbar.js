import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
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
    {
      title: 'Contact',
      link: '#contactForm'
    }
  ];

  return (
    <div className="w-full ">
      <nav className="container z-50 relative flex flex-wrap items-center  justify-between mx-auto p-8 lg:justify-between xl:px-0">
        <div className="fixed top-0 left-0 right-0 backdrop-blur-lg  bg-white/50 px-8  ">
             {/* Logo  */}
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center  justify-between w-full lg:w-auto">
                    <Link href="/">
                      <span className="flex items-center space-x-2 text-2xl font-medium  ">
                        <span>
                          <Image
                            src="/img/logo.png"
                            alt="N"
                            width="100"
                            height="50"
                            className="w-28 mx-8 py-2"
                          />
                        </span>
                      </span>
                    </Link>

                    <Disclosure.Button
                      aria-label="Toggle Menu"
                      className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden focus:outline-none ">
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        {open && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                          />
                        )}
                        {!open && (
                          <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          />
                        )}
                      </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                      <>
                        {navigation.map((item, index) => (
                          <Link key={index} href={item.link} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-secondary focus:outline-none">
                              {item.title}
                          </Link>
                        ))}
                      </>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>

            {/* menu  */}
            <div className="hidden text-center lg:flex lg:items-center -mt-8" >
              <ul className="items-center justify-end flex-1 -mt-5 mb-2 pt-6 list-none lg:pt-0 lg:flex">
                {navigation.map((menu, index) => (
                  <li className="mr-3 nav__item" key={index}>
                    <Link href={menu.link} className="inline-block px-4 py-2 text-xl font-normal text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-white focus:bg-secondary focus:outline-none dark:focus:bg-trueGray-700 ">
                        {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
