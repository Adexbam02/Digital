"use client"

import Image from "next/image";
import { faqs } from "./UI/data";
import { useState } from "react";
import plus from "../../public/plus.svg";
import close from "../../public/close.svg";

const FAQs = () => {
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

  const handleMenu = (id: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="px-[16px] w-full flexCol">
      <div className="topp border-solid border-grayTwo border-[1px] text-center flexCol py-[50px] px-[16px] bg-[url(/data-montain.svg)] bg-bottom bg-enter bg-no-repeat bg-[length:90%] bg-green/10">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-[20px]">
          Still you have any questions? Contact our Team via hello@squareup.com
        </p>
      </div>
      <div className="btm w-full border-solid border-grayTwo border-[1px] text-center flexCol gap-[0rem]">
        {faqs.map(({ id, text }) => (
          <div
            key={id}
            className="py-[35px] px-[16px] flexCol gap-4 w-full border-solid border-[1px] border-grayTwo"
          >
            <div className="flex items-start flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <span className="custom-gradient flexCenter rounded-[6px] border-none border-solid border-[#2E2E2E] p-[16px]">
                  <h1 className="font-extrabold text-5xl">{id}</h1>
                </span>
                <h3 className="text-white text-[20px] text-left">
                  What services does SquareUp provide?
                </h3>
                <Image
                  onClick={() => handleMenu(id)}
                  src={openFaqs[id] ? close : plus}
                  width={35}
                  height={35}
                  alt=""
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    openFaqs[id] ? "transform rotate-180" : ""
                  } overflow-hidden`}
                />
              </div>
              <p className={`text-left collapsible ${openFaqs[id] ? open : ""}`}>
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;