import p4 from "../../assets/p4.png";
const Beauty = () => {
  return (
    <div className="bg-[#F2F5FF]">
      <div className="container w-full mx-auto py-[60px] px-[20px] md:px-[50px] lg:px-[99px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[40px] items-center">
          <div>
            <h3 className="text-black text-[28px] sm:text-[32px] mon700 font-bold mb-[20px]">
              Beautify Your Space
            </h3>
            <p className="text-[#2B324C] text-[16px] sm:text-[20px] mon400 font-normal mb-[30px] leading-relaxed">
              Do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim
              veniam, <br /> quis nostrud exercitation ullamco laboris.
            </p>
            <button className="px-[30px] md:px-[50px] py-[12px] md:py-[20px] bg-[#054C73] rounded-[50px] text-white text-[14px] md:text-[16px] mon700 font-bold mt-[20px] md:mt-[30px]">
              Learn More
            </button>
          </div>
          <div className="relative flex justify-center">
            <img
              src={p4}
              className="w-[300px] sm:w-[400px] md:w-[500px] h-auto z-10 relative"
              alt=""
            />
            <div className="w-[250px] sm:w-[300px] md:w-[372px] h-[250px] sm:h-[300px] md:h-[372px] bg-[#09513B] rounded-full absolute top-[10%] sm:top-[15%] md:top-[24%] right-[5%] md:right-[2%] z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
