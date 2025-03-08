import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import headerSections from "@/data/sections";

const Footer = () => {
  return (
    <footer className="flex w-full bg-default-black justify-center">
      <div className="container px-[4%] lg:px-0  flex flex-col gap-8 py-9">
        <div className="flex w-full lg:flex-row gap-4 flex-col items-center justify-between">
          <Image
            src="/icon_big.svg"
            alt="logo grande"
            width={180}
            height={60}
          />
          <div
            className={twMerge(
              "flex gap-4 text-sm lg:flex-row flex-col items-center h-full"
            )}
          >
            {headerSections?.map((section) => {
              return (
                <Link
                  className="text-default-white hover:text-default-golden transition-colors"
                  key={`secao-${section.id}`}
                  href={section.link}
                >
                  {section.label}
                </Link>
              );
            })}
          </div>
        </div>
        <span className="h-0 rounded-full w-full border border-default-golden" />
        <div className="w-full gap-4 flex-col lg:flex-row items-center justify-between flex">
          <p className="text-default-white lg:text-left text-center">
            © 2025 Acalme Seu Coração. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 items-center ">
            <div className="flex gap-2">
              <p className="text-sm text-default-white">Desenvolvido por</p>
              <Image
                src="/math_icon.svg"
                alt="math icon"
                width={80}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
