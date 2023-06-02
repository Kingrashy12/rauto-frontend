import React from "react";
import { StyledFooter } from "../../styles/layout/Footer";
import { RAutoFooterLogo } from "../../asset";
import { footerdata, footerdataI } from "../../data/footer";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="pb-10 bg-slate-600 p-8 border-t-2 mt-20 max-[700px]:p-1 border-t-black max-[340px]:pb-16 flex flex-col gap-5">
      <StyledFooter className="max-[800px]:flex-col max-[800px]:gap-5 max-[340px]:gap-6">
        <img
          src={RAutoFooterLogo}
          className="w-56 max-[700px]:w-48 items-start text-start max-[340px]:-translate-y-8"
          alt="rauto"
        />
        <hr />
        <div className="flex flex-col justify-evenly max-[340px]:-translate-y-10">
          {footerdata.map((footer, index) => (
            <div className="flex flex-col" key={index}>
              <h2 className="font-bold uppercase text-xl font-sofia text-sky-500">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold font-sofia text-white hover:opacity-70 text-base"
                target="_blank"
                rel="noreferrer"
              >
                {footer.text}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-evenly max-[340px]:-translate-y-9">
          {footerdataI.map((footer, index) => (
            <div className="flex flex-col" key={index}>
              <h2 className="font-bold uppercase text-xl font-sofia text-sky-500">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold font-sofia text-white hover:opacity-70 text-base"
                target="_blank"
                rel="noreferrer"
              >
                {footer.text}
              </a>
            </div>
          ))}
        </div>
        <div className="flexflex-col gap-3 max-[340px]:-translate-y-8">
          <h2 className="font-bold uppercase text-xl font-sofia text-sky-500">
            Socials
          </h2>
          <div className="flex gap-4 max-[340px]:gap-6">
            <a
              href="https://twitter.com/Rashyking12"
              className="/text-sky-300 text-blue-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={23} />
            </a>
            <a
              href="/"
              className="text-blue-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={23} />
            </a>
            <a
              href="/"
              className="text-white hover:opacity-70"
              target="_blank"
              rel="noreferrer"
            >
              <GiHummingbird size={25} />
            </a>
            <a
              href="/"
              className="text-blue-400 hover:opacity-70"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={23} />
            </a>
            <a
              href="https://github.com/Kingrashy12"
              className="text-black hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={23} />
            </a>
          </div>
        </div>
      </StyledFooter>
      <div className="border-b border-b-neutral-500 " />
      <span className="font-bold font-sofia text-base text-white text-center">
        &copy; 2023 RAuto
      </span>
    </div>
  );
};

export default Footer;
