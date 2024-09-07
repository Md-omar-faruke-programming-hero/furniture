import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
const Collection = () => {
  return (
    <div className="bg-[#FFF]">
      <div className="container w-full mx-auto py-[60px] md:px-[50px] lg:px-[99px] ">
        <h2 className="text-[#333333] text-[32px] mon700 font-bold text-center mb-[20px]">
          Inspiration Collection
        </h2>
        <p className="text-[#666666] text-[20px] mon400 font-normal text-center mb-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[40]">
        <div>
            <img src={p2} alt="" />
          </div>
          <div>
            <img src={p1} alt="" />
          </div>
          
          <div>
            <img src={p3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
