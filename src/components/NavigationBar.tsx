"use client";

import Image from "next/image";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";

interface Page {
  id: string;
  scrollId: string;
}

const pages: Page[] = [
  {
    id: "Education",
    scrollId: "education",
  },
  {
    id: "Experience",
    scrollId: "experience",
  },
  {
    id: "Projects",
    scrollId: "projects",
  },
  {
    id: "Achievements",
    scrollId: "achievements",
  },
];

export default function NavigationBar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleNavClick = (page: Page) => {
    const element = document.getElementById(page.scrollId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-background/80 dark:bg-darkbackground/80 backdrop-blur-md fixed px-7 sm:px-10 py-6 z-30 transition-all duration-300 border-b border-transparent dark:border-white/5">
      <div className="flex flex-row justify-between">
        <Image
          src={theme === "light" ? "/ECLogoLight.svg" : "/ECLogoDark.svg"}
          alt="Logo"
          width={30}
          height={30}
        />

        <div className="hidden text-md md:text-lg space-x-5 sm:flex flex-row">
          {pages.map((page, i) => (
            <div key={page.id} className="flex flex-row space-x-5 items-center">
              <motion.a
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="cursor-pointer"
                onClick={() => handleNavClick(page)}
              >
                {page.id}
              </motion.a>
              {i !== pages.length - 1 && (
                <div className="border-l border"></div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden sm:block duration-200"
        >
          {theme === "dark" ? (
            <BsFillSunFill size={23} />
          ) : (
            <BsFillMoonFill size={23} />
          )}
        </button>

        {/* Mobile Navigation View */}
        <button
          id="expand-mobile-nav"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="block sm:hidden"
        >
          {isMobileNavOpen ? (
            <RxCross2 size={28} />
          ) : (
            <RxHamburgerMenu size={28} />
          )}
        </button>
      </div>

      <Transition
        as={Fragment}
        show={isMobileNavOpen}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`bg-background dark:bg-darkbackground duration-200 space-y-1 pt-5 pb-2 text-lg block sm:hidden`}
        >
          {pages.map((page) => (
            <div
              onClick={() => handleNavClick(page)}
              key={page.id}
              className="cursor-pointer py-2 duration-200 hover:font-semibold"
            >
              {page.id}
            </div>
          ))}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="pt-2 flex flex-row gap-5 duration-200"
          >
            <a>
              Theme ({theme && theme.charAt(0).toUpperCase() + theme.slice(1)})
            </a>
            {theme === "dark" ? (
              <BsFillSunFill size={23} />
            ) : (
              <BsFillMoonFill size={23} />
            )}
          </button>
        </div>
      </Transition>
    </nav>
  );
}
