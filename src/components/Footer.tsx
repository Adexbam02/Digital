import Image from "next/image";
import Link from "next/link";
import { footer } from "./UI/data";

const Footer = () => {
  return (
    <div className="p-[16px] bg-gray-900 text-white border-solid border-t-[1.5px] border-grayTwo">
      <div className="w-full flexCenter py-[30px] px-[16px] border-solid border-b-[1px] border-grayTwo">
        <Image src="/Logo.svg" width={170} height={170} alt="Logo" />
      </div>

      <div className="py-[40px] flexCenter flex-wrap gap-[1.5rem]">
        {footer.map(({ id, title, link }) => (
          <div key={id} className="leading-3">
            <Link
              href={link}
              className="text-white text-[20px] hover:text-green-500"
            >
              {title}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 items-center border-grayTwo border-solid border-[2px] rounded-[8px] py-[20px]">
        <p className="text-2xl">Stay Connected</p>
        <div className="flex space-x-4">
          <span className="flexCenter custom-gradient flexCenter rounded-[6px] border-[#2E2E2E] p-[16px]">
            <Image src="/facebook.svg" width={25} height={25} alt="Facebook" />
          </span>
          <span className="flexCenter custom-gradient flexCenter rounded-[6px] border-[#2E2E2E] p-[16px]">
            <Image src="/twitter.svg" width={25} height={25} alt="Twitter" />
          </span>
          <span className="flexCenter custom-gradient flexCenter rounded-[6px] border-[#2E2E2E] p-[16px]">
            <Image src="/linkedin.svg" width={25} height={25} alt="LinkedIn" />
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[2.5rem]">
        <span className="flexCenter p-[20px] borderB w-full">
          <Image src="/mail.svg" width={25} height={25} alt="Mail" />
          <p className="ml-2">hello@squareup.com</p>
        </span>
        <span className="flexCenter flex items-center p-[20px] borderB w-full">
          <Image src="/phone.svg" width={25} height={25} alt="Phone" />
          <p className="ml-2">+91 91813 23 2309</p>
        </span>
        <span className="flexCenter flex items-center p-[20px] borderB w-full">
          <Image src="/location.svg" width={25} height={25} alt="Location" />
          <p className="ml-2">Somewhere in the World</p>
        </span>
      </div>
      <p className="text-center  p-[20px]">
        © 2023 SquareUp. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
