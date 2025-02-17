import Image from "next/image";
import { testionials } from "./UI/data";

const Testimonials = () => {
  return (
    <div className="px-[16px] w-full flexCol ">
      <div className="topp border-solid border-grayTwo border-[1px] text-center flexCol py-[50px] px-[16px] bg-[url(/data-montain.svg)] bg-bottom  bg-enter bg-no-repeat bg-[length:100%] bg-green/10">
        <h1 className="text-4xl font-bold">What our Clients say About us</h1>
        <p className="text-[20px]">
          At SquareUp, we take pride in delivering exceptional digital products
          and services that drive success for our clients. Here&apos;s what some
          of our satisfied clients have to say about their experience working
          with us
        </p>
      </div>

      <div className="btm w-full border-solid border-grayTwo border-[1px] text-center flexCol  flexCol gap-[0rem]">
        {testionials.map(({ id, title, profile, text, name, post }) => (
          <div
            key={id}
            className="text-left py-[50px] px-[16px] flex flex-col items-start gap-4 w-full border-solid border-[1px] border-grayTwo"
          >
            <p className="text-greenFour text-[20px]">
              {title}
            </p>

            <p>
              {text}
            </p>

            <div className="w-full p-[14px] bg-grayTwo rounded-[6px] border-solid border-[1px] border-green/20 flex items-start flex-col gap-4">
              <div className="flex items-center justify-normal gap-4">
                <span className="custom-gradient flexCenter rounded-[6px]  border-[#2E2E2E] ">
                  <Image
                    src={profile}
                    width={50}
                    height={50}
                    alt="Profile Picture"
                  />
                </span>
                <div className="bg-red-00  flex flex-col items-start justify-end">
                  <h3 className=" text-[20px] font-bold">{name}</h3>
                  <p className="">{post}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
