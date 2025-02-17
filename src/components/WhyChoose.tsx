// import Link from "next/link";
import Image from "next/image";
import { whyChoose } from "./UI/data";

const WhyChoose = () => {
  return (
    <div className="px-[16px] w-full flexCol ">
      <div className="topp border-solid border-grayTwo border-[1px] text-center flexCol py-[50px] px-[16px] bg-[url(/data-montain.svg)] bg-bottom  bg-enter bg-no-repeat bg-[length:90%] bg-green/10">
        <h1 className="text-4xl font-bold">Why Choose SquareUp?</h1>
        <p className="text-[20px]">
          Experience excellence in digital craftsmanship with our team of
          skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      <div className="btm w-full border-solid border-grayTwo border-[1px] text-center flexCol  flexCol gap-[0rem]">
        {whyChoose.map(({ id, title, icon, text}) => (
          <div
            key={id}
            className="py-[50px] px-[16px] flexCol gap-4 w-full border-solid border-[1px] border-grayTwo"
          >
            <div className="flex items-start flex-col gap-4">
              <div className="flex items-center justify-normal">
                <span className="custom-gradient flexCenter rounded-[6px] border-none border-solid border-[#2E2E2E] p-[16px]">
                  <Image src={icon} width={25} height={25} alt="" />
                </span>
                <h3 className="ml-4 text-[30px] font-bold">{title}</h3>
              </div>
              <p className="text-left">{text}</p>
            </div>

            {/* <Link
              href={direct}
              className="bg-grayTwo w-full rounded-[6px] p-[15px]"
            >
              Learn More
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
