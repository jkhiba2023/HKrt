import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#d5af34] mt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          <div>
            <h3 className="text-[#d4af33] font-bold text-base sm:text-lg mb-3">
              Get to know Us
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm sm:text-[15px]">
              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                About HKrt
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#d4af33] font-bold text-base sm:text-lg mb-3">
              Connect with Us
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm sm:text-[15px]">
              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Facebook
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Twitter
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Instagram
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#d4af33] font-bold text-base sm:text-lg mb-3">
              Make Money with Us
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm sm:text-[15px]">
              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Sell on HKrt
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Sell under HKrt Accelerator
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Protect and Build Your Brand
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Supply to HKrt
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Become an Affiliate
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Fulfilment by HKrt
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Advertise Your Products
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#d4af33] font-bold text-base sm:text-lg mb-3">
              Let Us Help You
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm sm:text-[15px]">
              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Your Account
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Returns Centre
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Recalls and Product Safety Alerts
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                100% Purchase Protection
              </li>

              <li className="cursor-pointer hover:text-[#d4af33] transition-colors duration-200">
                Help
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d5af34] py-4 px-4">
        <p className="text-gray-500 text-xs sm:text-sm text-center">
          © HKrt Since 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
