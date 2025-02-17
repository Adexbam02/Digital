// import Link from "next/link";
import Image from "next/image";
import { whyChoose } from "./UI/data";

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
        {whyChoose.map(({ id, title, icon, text }) => (
          <div
            key={id}
            className="text-left py-[50px] px-[16px] flex flex-col items-start gap-4 w-full border-solid border-[1px] border-grayTwo"
          >
            <p className="text-greenFour text-[20px]">
              SquareUp has been Instrumental in Transforming our Online
              Presence.{" "}
            </p>

            <p>
              Their team&apos;s expertise in web development and design resulted in a
              visually stunning and user-friendly e-commerce platform. Our
              online sales have skyrocketed, and we couldn&apos;t be happier.
            </p>

            <div className="w-full p-[14px] bg-grayTwo rounded-[6px] border-solid border-[1px] border-green flex items-start flex-col gap-4">
              <div className="flex items-center justify-normal">
                <span className="custom-gradient flexCenter rounded-[6px] border-none border-solid border-[#2E2E2E] p-[16px]">
                  <Image src="{icon}" width={25} height={25} alt="" />
                </span>
                <h3 className="ml-4 text-[30px] font-bold">{title}</h3>
              </div>
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

export default Testimonials;
