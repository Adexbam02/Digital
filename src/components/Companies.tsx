import Image from "next/image";

const Companies = () => {
  return (
    <div className="px-[16px] flex items-center flex-col justify-center">
      <div className = "w-full min-w-[385px] p-[10px] flex items-center justify-center bg-gray border-solid border-b-[2px] border-grayThree">
          <p className= " ">
          Trusted By 250+ Companies
          </p>
      </div>

      <div className="w-full grid grid-flow-col grid-rows-3 gap-0">
        <div className="flexCenter py-[30px] px-[35px] bg-gray border-solid border-x-[1.5px] border-grayThree">
          <Image
            src={"/companiesLogo/zapier.svg"}
            width={120}
            height={120}
            alt=""
            className=""
          />
        </div>
        <div className="flexCenter py-[30px] px-[35px] bg-gray border-solid border-[1.5px] border-grayThree">
          <Image
            src={"/companiesLogo/spotify.svg"}
            width={120}
            height={120}
            alt=""
            className=""
          />
        </div>
        <div className="flexCenter py-[30px] px-[35px] bg-gray border-solid border-[1.5px] border-grayThree">
          <Image
            src={"/companiesLogo/zoom.svg"}
            width={120}
            height={120}
            alt=""
            className=""
          />
        </div>
        <div className="flexCenter py-[30px] px-[35px] bg-gray border-solid border-x-[1.5px] border-grayThree">
          <Image
            src={"/companiesLogo/amazon.svg"}
            width={120}
            height={120}
            alt=""
            className=""
          />
        </div>
        <div className = "flexCenter py-[30px] px-[35px] bg-gray border-solid border-[1.5px] border-grayThree">
          <Image
            src={"/companiesLogo/adobe.svg"}
            width={120}
            height={120}
            alt=""
            className=""
          />
        </div>
        <div className = "flexCenter py-[30px] px-[35px] bg-gray border-solid border-[1.5px] border-grayThree">
          <Image
            src={"/companiesLogo/slack.svg"}
            width={120}
            height={120}
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  )
}

export default Companies