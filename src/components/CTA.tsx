"use client";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="px-[16px] w-full flexCol">
      <div className="topp border-solid border-grayTwo border-[1px] text-center flexCol gap-[1rem] py-[50px] px-[16px] bg-[url(/data-montain.svg)] bg-bottom bg-enter bg-no-repeat bg-[length:100%] bg-green/10">
        <Image src="/mainLogo.svg" width={70} height={70} alt="" />
        <h1 className="text-4xl font-bold">
          Thank you for your Interest in SquareUp.
        </h1>
        <p className="text-[20px]">
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>
      </div>

      <div className="btm w-full border-solid border-grayTwo border-[1px] p-[16px]">
        ...Loading
      </div>
    </div>
  );
};

export default CTA;
