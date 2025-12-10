import React from "react";

const Footer = () => {
  return (
    <div className=" bg-white border-t border-[#d5af34] my-2 max-w-full ">
      <div className="grid grid-cols-1 mx-5 md:grid-cols-4  md:mx-10 gap-5 border-b border-[#d5af34] py-[30px] ">
        <div className="text-sm md:text-[18px]">
          <h3 className="text-[#d4af33] font-bold">Get to know Us</h3>
          <ul className="text-[#d4af33] text-sm md:text-[16px] cursor-pointer">
            <li>About HKrt</li>
          </ul>
        </div>
        <div className="text-sm md:text-[18px]">
          <h3 className="text-[#d4af33] font-bold">Connect with Us</h3>
          <ul className="text-[#d4af33] text-sm md:text-[16px] cursor-pointer">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="text-sm md:text-[18px]">
          <h3 className="text-[#d4af33] font-bold">Make Money with Us</h3>
          <ul className="text-[#d4af33] text-sm md:text-[16px] cursor-pointer">
            <li className="">Sell on HKrt</li>
            <li>Sell under HKrt Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Supply to HKrt</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by HKrt</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="text-sm md:text-[18px]">
          <h3 className="text-[#d4af33] font-bold">Let Us Help You</h3>
          <ul className="text-[#d4af33] text-sm md:text-[16px] cursor-pointer">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <p className=" text-[#d4af33] text-[8px] md:text-[14px] text-center">
        {" "}
        &copy; HKrt Since 2025
      </p>
    </div>
  );
};

export default Footer;
