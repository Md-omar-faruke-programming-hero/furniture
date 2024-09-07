import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";

const How = () => {
  return (
    <div className="bg-[#FFF] ">
      <div className="container w-full mx-auto py-[60px] md:px-[50px] lg:px-[99px] ">
        <h2 className="text-[#333333] text-[32px] mon700 font-bold text-center mb-[20px]">
          How It Works
        </h2>
        <p className="text-[#666666] text-[20px] mon400 font-normal text-center mb-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[40]">
          <div>
            <img src={p9} alt="" className="h-[445px]" />
            <p className="text-[#333333] text-[24px] mon600 font-semibold text-center mt-[30px]">
              Purchase Securely
            </p>
            <p className="text-[#666666] text-[18px] mon400 font-normal text-center mt-[10px] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </p>
          </div>

          <div>
            <img src={p10} alt="" className="h-[445px]" />
            <p className="text-[#333333] text-[24px] mon600 font-semibold text-center mt-[30px]">
              Ships From Warehouse
            </p>
            <p className="text-[#666666] text-[18px] mon400 font-normal text-center mt-[10px] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit.
            </p>
          </div>
          <div>
            <img src={p8} className="h-[445px]" alt="" />
            <p className="text-[#333333] text-[24px] mon600 font-semibold text-center mt-[30px]">
              Style Your Room
            </p>
            <p className="text-[#666666] text-[18px] mon400 font-normal text-center mt-[10px] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
