import Link from "next/link";

const Header = () => {
  return (
    <header className="border-solid border-x-[0px] border-t-[0px] border-grayTwo border-[1px] flex  w-full px-[16px] h-[90vh] bg-[url(/data-montain.svg)] bg-bottom  bg-enter bg-no-repeat bg-[length:100%]">
      <div className="h-[80%] flex items-center flex-col gap-[1.5rem] justify-center text-white text-center">
        <h1 className="text-5xl font-bold ">
          A Digital Product Studio that will Work
        </h1>

        <div className="max-w-[453px] bg-grayTwo/20 rounded-[8px] border border-gray px-[18px] py-[14px]">
          <p className="text-[25px]">
            For startups, enterprise leaders, media & publishers, and social
            good.
          </p>
        </div>

        <div className="btn flex items-center justify-center gap-4">
          <Link
            className="bg-gray/90 rounded-[8px] items-center justify-center px-[15px] py-[13px] "
            href="/dashboard"
          >
            Our Works
          </Link>
          <Link
            className="bg-green text-grayTwo font-medium rounded-[8px] items-center justify-center px-[15px] py-[13px]"
            href="/dashboard"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
