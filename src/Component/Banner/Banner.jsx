import banner from "../../assets/banner.png";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import {  Reveal } from "react-reveal";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#ebebeb]">
        <div
          className="w-full h-[500px] md:h-[750px] flex items-center justify-center md:justify-end container mx-auto"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full md:w-auto px-5">
            <Reveal effect="slide-in-left">
              <div className="bg-[#DFE9F4] rounded-[10px] shadow-2xl w-full max-w-[643px] h-auto md:h-[443px] mr-0 md:mr-[90px] p-[20px] md:p-[40px]">
                <span className="text-[12px] md:text-[16px] text-[#333333] mon600 tracking-[2px] md:tracking-[3px] leading-[16px] md:leading-[19.3px] mb-[10px] md:mb-[20px] block">
                  New Arrival
                </span>
                <h1 className="mon700 text-[32px] md:text-[52px] font-bold leading-[40px] md:leading-[65px] text-[#054C73] mb-[10px] md:mb-[20px]">
                  Discover Our <br />
                  New Collection
                </h1>
                <p className="text-[#333333] text-[14px] md:text-[18px] leading-[24px] md:leading-[39px] mon500 font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                  nec ullamcorper mattis.
                </p>
                <button className="px-[40px] md:px-[72px] py-[15px] md:py-[25px] bg-[#054C73] rounded-[50px] text-white text-[14px] md:text-[16px] mon700 font-bold mt-[20px] md:mt-[30px] hover:bg-[black]">
                  BUY NOW
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F5FF]">
        <div className="container w-full mx-auto px-5 md:px-[50px] lg:px-[99px] py-[30px] lg:py-[45px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
            <div className="flex items-center">
              <div className="mr-5 lg:mr-[27px]">
                <img src={s3} alt="" className="w-[55px] h-[50px] lg:w-[83px]" />
              </div>
              <div>
                <p className="mon600 font-semibold text-[#333333] text-[18px] lg:text-[24px]">
                  Free Delivery
                </p>
                <p className="mon400 font-normal text-[#333333] text-[14px] lg:text-[18px] mt-[6px]">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-5 lg:mr-[27px]">
                <img src={s2} alt="" className="w-[49px] h-[49px] lg:w-[59px]" />
              </div>
              <div>
                <p className="mon600 font-semibold text-[#333333] text-[18px] lg:text-[24px]">
                  Support 24/7
                </p>
                <p className="mon400 font-normal text-[#333333] text-[14px] lg:text-[18px] mt-[6px]">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-5 lg:mr-[27px]">
                <img src={s1} alt="" className="w-[55px] h-[55px]" />
              </div>
              <div>
                <p className="mon600 font-semibold text-[#333333] text-[18px] lg:text-[24px]">
                  100% Authentic
                </p>
                <p className="mon400 font-normal text-[#333333] text-[14px] lg:text-[18px] mt-[6px]">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
