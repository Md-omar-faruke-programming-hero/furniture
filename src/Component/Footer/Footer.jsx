import p11 from "../../assets/p11.png";
import p12 from "../../assets/p12.png";
import p13 from "../../assets/p13.jpg";
import p14 from "../../assets/p14.png";

const Footer = () => {
  return (
    <div className="bg-[#03344F]">
      <div className="container mx-auto py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 mr-0 md:mr-6">
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">Beauty Care</p>
            <p className="text-base md:text-lg leading-relaxed font-normal text-white mb-6">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">Follow Us</p>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-2/3">
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">Instagram Shop</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
              <div>
                <img src={p11} alt="Instagram 1" className="w-full object-cover" />
              </div>
              <div>
                <img src={p12} alt="Instagram 2" className="w-full object-cover" />
              </div>
              <div>
                <img src={p13} alt="Instagram 3" className="w-full object-cover" />
              </div>
              <div>
                <img src={p14} alt="Instagram 4" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <aside>
          <p className="mt-8 text-center text-white text-sm">
            Copyright © {new Date().getFullYear()} - All rights reserved by Omar Faruke
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
