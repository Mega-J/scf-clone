import Link from "next/link";
import React from "react";
import Image from "next/image";
import mail from "@/components/assets/mail-sfc.png";
import facebook from "@/components/assets/fb-sfc.png";
import telegram from "@/components/assets/tg-sfc.png";
import twitter from "@/components/assets/twitter-sfg.png";

import { Copyright } from "./assets/icon";

const Footer = () => {
  return (
    <footer className="bg-[#152330] mt-32  text-white  p-6 py-12 md:px-20 lg:px-24">
      <div className="flex flex-col space-y-9 lg:flex-row lg:space-y-0 md:justify-between">
        <div className="flex flex-col space-y-8">
          <p className="text-2xl md:text-[24px] font-bold">Contact US</p>
          <div className="flex space-x-4 md:w-[390px]">
            <a href="https://web.facebook.com/people/Scf-Chain/pfbid031uXBvKaxnBpsG5fgKZkGmEmLXZX2iN4QuMDSCHrWdDi22PrCSaQzDWK4PYAT3J3fl/?sk=about" target="_blank" rel="noopener noreferrer">
              <Image src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/SCF_Finance" target="_blank" rel="noopener noreferrer">
              <Image src={twitter} alt="Twitter" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image src={telegram} alt="Telegram" />
            </a>
            <a href="mailto:help@sfchain.io">
              <Image src={mail} alt="Email" />
            </a>
          </div>
        </div>
        {/* <div className="flex text-base md:text-[20px] flex-col space-y-4 lg:space-y-8">
          <Link
            href="/privacy-policy"
            className="duration-200 hover:text-gray-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-condition"
            className="duration-200 hover:text-gray-300"
          >
            Terms and condition
          </Link>
        </div> */}
      </div>
      <div className="flex items-center mt-10 space-x-1 text-sm opacity-70 md:text-base lg:mt-6">
        <p>Copyright</p> <Copyright /> <p>2023 -SFC</p>
      </div>
    </footer>
  );
};

export default Footer;
