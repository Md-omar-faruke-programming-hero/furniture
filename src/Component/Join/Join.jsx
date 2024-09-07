const Join = () => {
  return (
    <div className="bg-[#F2F5FF]">
      <div className="container mx-auto py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <h2 className="text-[#333333] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Join Our Mailing List
        </h2>
        <p className="text-[#666666] text-lg md:text-xl font-normal text-center mb-8">
          Sign up to receive inspiration, product updates,<br /> and special offers from our team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-full sm:w-80 md:w-96 h-[60px] px-4  border border-gray-300  outline-none"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-[#03344F] text-white font-semibold  h-[60px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
