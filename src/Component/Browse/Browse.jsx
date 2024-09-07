import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
const Browse = () => {
  return (
    <div className="bg-[#FFF] border-b-2  border-[#D7D6D6]">
      <div className="container w-full mx-auto py-[60px] md:px-[50px] lg:px-[99px] ">
        <h2 className="text-[#333333] text-[32px] mon700 font-bold text-center mb-[20px]">
          Browse The Range
        </h2>
        <p className="text-[#666666] text-[20px] mon400 font-normal text-center mb-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[40]">
          <div>
            <img src={p5} alt="" />
            <p className="text-[#333333] text-[24px] mon600 font-semibold text-center mt-[30px]">
              Dining
            </p>
          </div>
          <div>
            <img src={p6} alt="" />
            <p className="text-[#333333] text-[24px] mon600 font-semibold text-center mt-[30px]">
              Living
            </p>
          </div>

          <div>
            <img src={p7} alt="" />
            <p className="text-[#333333] text-[24px] mon600 font-semibold text-center mt-[30px]">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
