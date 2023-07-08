import React from "react";
import { StyledFooter } from "../../styles/layout/Footer";
import { RAuto, RAutoLogoNew } from "../../asset";
import { footerdata, footerdataI, footerdataII } from "../../data/footer";
import FooterNav from "./FooterNav";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const path = useLocation();
  return (
    <div
      className={`pb-10 bg-black p-8 mt-20 max-[700px]:p-1 max-[340px]:pb-20 max-[700px]:pb-20 flex gap-5 z-[90]`}
    >
      <StyledFooter className="max-[800px]:flex-col max-[800px]:gap-5 max-[340px]:gap-6">
        <div className="flex flex-col">
          <img
            src={RAutoLogoNew}
            className="w-[160px] h-[150px] max-[700px]:w-[120px] max-[700px]:h-[70px] items-start text-start max-[340px]:-translate-y-8"
            alt="rauto"
          />
          <span className="font-sofia text-white font-semibold">
            &copy; RAuto Automobile. All right reserved
          </span>
        </div>
        <hr />
        <div className="flex flex-col justify-evenly max-[340px]:-translate-y-10">
          {footerdata.map((footer, index) => (
            <div className="flex flex-col" key={index}>
              <h2 className="font-semibold uppercase text-xl font-sofia text-white">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold hover:underline font-sofia text-neutral-400 hover:text-red-500 text-base"
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
              <h2 className="font-semibold uppercase text-xl font-sofia text-white">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold hover:underline font-sofia text-neutral-400 hover:text-red-500 text-base"
                target="_blank"
                rel="noreferrer"
              >
                {footer.text}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-evenly max-[340px]:-translate-y-9">
          {footerdataII.map((footer, index) => (
            <div className="flex flex-col" key={index}>
              <h2 className="font-semibold uppercase text-xl font-sofia text-white">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold font-sofia hover:underline text-neutral-400 hover:text-red-500 text-base"
                target="_blank"
                rel="noreferrer"
              >
                {footer.text}
              </a>
            </div>
          ))}
        </div>
      </StyledFooter>
      <div className="border-b border-b-neutral-500 " />
      <FooterNav />
    </div>
  );
};

export default Footer;
