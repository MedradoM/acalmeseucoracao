"use client";

import { useScrollContext } from "@/context/scrollContext";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import headerSections from "@/data/sections";
import ContactForm from "../contactForm";

const headerSocialMedia = [
  {
    id: 0,
    icon: FaInstagram,
    link: "https://www.instagram.com/acalmeoseucoracao/",
    color: "hover:bg-[#e1306c]",
  },
  {
    id: 1,
    icon: FaWhatsapp,
    link: "https://wa.me/5517992681036?text=Vim+do+Site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+Programa+Acalme+seu+Cora%C3%A7%C3%A3o",
    color: "hover:bg-[#25d366]",
  },
];

const Header = () => {
  const { isScrolled } = useScrollContext();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={twMerge(
        "fixed left-0 w-full flex justify-center transition-all max-h-14 h-full z-10 bg-default-white",
        !open && isScrolled ? "top-0 drop-shadow" : "-top-14",
        open &&
          "max-h-screen backdrop-blur bg-opacity-50 top-0 duration-500 overflow-hidden flex-row-reverse"
      )}
    >
      <Link
        href={"#top"}
        className={twMerge(
          "absolute flex gap-2 top14 ",
          !open
            ? isScrolled
              ? "Back bg-default-white rounded-full transition-all duration-1000"
              : "Centered "
            : "Back"
        )}
      >
        <Image
          alt="Logo"
          src={"/icon_green.svg"}
          width={!open ? (isScrolled ? 70 : 110) : 70}
          height={!open ? (isScrolled ? 70 : 110) : 70}
          className={twMerge(
            "transition-all duration-1000 object-scale-down",
            !open && isScrolled ? "opacity-100" : "opacity-0"
          )}
        />
        <Image
          alt="Logo"
          src={"/icon.svg"}
          width={!open ? (isScrolled ? 70 : 110) : 70}
          height={!open ? (isScrolled ? 70 : 110) : 70}
          className={twMerge(
            "transition-all duration-1000 object-scale-down absolute",
            !open && isScrolled ? "opacity-0" : "opacity-100"
          )}
        />
      </Link>

      <div
        className={twMerge(
          "flex w-full lg:hidden absolute h-full items-center pr-2 justify-end",
          open && "h-fit w-fit top-2 right-0"
        )}
      >
        <label className="label">
          <input
            type="checkbox"
            onChange={() => (open ? setOpen(false) : setOpen(true))}
            id="check"
            checked={open}
          />
          <span className="menubar"></span>
          <span className="menubar"></span>
          <span className="menubar"></span>
        </label>
      </div>

      <div
        className={twMerge(
          "w-full hidden lg:flex justify-between mx-[10%] h-full",
          open && "flex flex-col justify-center items-center mx-0 "
        )}
      >
        <div
          className={twMerge(
            "flex gap-4 text-sm items-center h-full",
            open && "flex-col h-fit"
          )}
        >
          {headerSections.map((section) => {
            return (
              <Link
                className="text-default-black hover:text-default-golden transition-colors"
                key={`secao-${section.id}`}
                href={section.link}
                onClick={() => setOpen(false)}
              >
                {section.label}
              </Link>
            );
          })}
        </div>
        <div className={twMerge("flex gap-4 items-center", open && "flex-col")}>
          {headerSocialMedia.map((socialMedia) => (
            <Link
              key={`socialMedia-${socialMedia.id}`}
              href={socialMedia.link}
              target="_blank"
              className={twMerge(
                "p-2 transition-all hover:text-default-white hover:border-default-white duration-300 overflow-hidden rounded-full border border-default-black",
                !open && !isScrolled && "size-0 p-0",
                socialMedia.color
              )}
            >
              <socialMedia.icon />
            </Link>
          ))}
          <ContactForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
