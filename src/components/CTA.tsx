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

      <div className="btm px-[16px] w-full border-solid border-grayTwo border-[1px] p-[16px]">
        <form className="flexCol gap-[2rem]">
            <div className="bg-grayTwo py-[25px] border-grayThree border-[1.5px] border-solid px-[16px] rounded-[8px] w-full flex flex-col gap-3 items-start">
                <p className="text-[20px]">Full Name</p>
                <input type="text" placeholder="Type here" className="w-full border-solid border-b-[1.5px] border-grayThree bg-transparent outline-none"/>
            </div>

            <div className="bg-grayTwo py-[25px] border-grayThree border-[1.5px] border-solid px-[16px] rounded-[8px] w-full flex flex-col gap-3 items-start">
                <p className="text-[20px]">Email</p>
                <input type="email" placeholder="Type here" className="w-full border-solid border-b-[1.5px] border-grayThree bg-transparent outline-none"/>
            </div>

            <div className="bg-grayTwo py-[25px] border-grayThree border-[1.5px] border-solid px-[16px] rounded-[8px] w-full flex flex-col gap-3 items-start">
                <p className="text-[20px]">Why are you contacting us?</p>
                <input type="text" placeholder="Type here" className="w-full border-solid border-b-[1.5px] border-grayThree bg-transparent outline-none"/>
            </div>

            <div className="bg-grayTwo py-[25px] border-grayThree border-[1.5px] border-solid px-[16px] rounded-[8px] w-full flex flex-col gap-3 items-start">
                <p className="text-[20px]">Your Budget</p>
                <input type="text" placeholder="$100" className="w-full border-solid border-b-[1.5px] border-grayThree bg-transparent outline-none"/>
            </div>

            <div className="bg-grayTwo py-[25px] border-grayThree border-[1.5px] border-solid px-[16px] rounded-[8px] w-full flex flex-col gap-3 items-start">
                <p className="text-[20px]">Your Message</p>
                <input type="text" placeholder="$100" className="w-full border-solid border-b-[1.5px] border-grayThree bg-transparent outline-none"/>
            </div>

            <button className="py-[20px] w-full rounded-[8px] text-grayTwo text-[20px] bg-green">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CTA;
