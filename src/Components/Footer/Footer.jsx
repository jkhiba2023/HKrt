import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-white border-t border-[#d5af34] my-4">
      <div className="flex justify-center items-start  h-[300px] w-[90%] gap-5 py-[30px] border-b-2 border-[#d4af33] ">
        <div>
          <h3 className="text-[#d4af33] font-bold">Get to know Us</h3>
          <ul className="text-[#d4af33] text-2 cursor-pointer">
            <li>About HKrt</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#d4af33] font-bold">Connect with Us</h3>
          <ul className="text-[#d4af33] text-2 cursor-pointer">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#d4af33] font-bold">Make Money with Us</h3>
          <ul className="text-[#d4af33] text-2 cursor-pointer">
            <li className="">Sell on HKrt</li>
            <li>Sell under HKrt Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Supply to HKrt</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by HKrt</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#d4af33] font-bold">Let Us Help You</h3>
          <ul className="text-[#d4af33] text-2 cursor-pointer">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
