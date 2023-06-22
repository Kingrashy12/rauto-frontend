import React from "react";
import { StyledFooter } from "../../styles/layout/Footer";
import { RAuto } from "../../asset";
import { footerdata, footerdataI, footerdataII } from "../../data/footer";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <div className="pb-10 bg-slate-50 p-8 mt-20 max-[700px]:p-1 max-[340px]:pb-20 max-[700px]:pb-20 flex flex-col gap-5">
      <StyledFooter className="max-[800px]:flex-col max-[800px]:gap-5 max-[340px]:gap-6">
        <div className="flex flex-col">
          <img
            src={RAuto}
            className="w-[160px] h-[90px] max-[700px]:w-[120px] max-[700px]:h-[70px] items-start text-start max-[340px]:-translate-y-8"
            alt="rauto"
          />
          <span className="font-sofia text-black font-semibold">
            &copy; RAuto Automobile. All right reserved
          </span>
        </div>
        <hr />
        <div className="flex flex-col justify-evenly max-[340px]:-translate-y-10">
          {footerdata.map((footer, index) => (
            <div className="flex flex-col" key={index}>
              <h2 className="font-semibold uppercase text-xl font-sofia text-black">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold hover:underline font-sofia text-neutral-600 hover:text-red-500 text-base"
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
              <h2 className="font-semibold uppercase text-xl font-sofia text-black">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold hover:underline font-sofia text-neutral-600 hover:text-red-500 text-base"
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
              <h2 className="font-semibold uppercase text-xl font-sofia text-black">
                {footer.title}
              </h2>
              <a
                href={footer.link}
                className="font-semibold font-sofia hover:underline text-neutral-600 hover:text-red-500 text-base"
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
