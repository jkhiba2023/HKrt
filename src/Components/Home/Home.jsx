import React, { useEffect, useState } from "react";
import img1 from "../../assets/Home1.webp";
import { GiReturnArrow } from "react-icons/gi";
import { IoMdCash } from "react-icons/io";
import { MdAutoAwesome, MdHighQuality } from "react-icons/md";
import { ImgData } from "../ImageData/imageData";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-100 overflow-hidden">
      <img src={img1} alt="Home" className="w-full h-auto object-contain" />

      <div className="flex justify-center items-center w-full md:w-full lg:w-full bg-amber-200 h-10">
        <div className="flex items-center justify-center text-wrap  md:gap-2  mx-5">
          <p className="flex justify-center items-center text-[8px] md:text-[14px] gap-2 ">
            <GiReturnArrow size={20} />7 Days Easy Return
          </p>
          <span className="px-2">|</span>
          <p className="flex justify-center items-center text-[8px] md:text-[14px] gap-2">
            <IoMdCash size={20} />
            Cash on Delivery
          </p>
          <span className="px-2">|</span>
          <p className="flex justify-center items-center text-[8px] md:text-[14px] gap-2">
            <MdAutoAwesome size={20} />
            Best Product
          </p>
          <span className="px-2">|</span>
          <p className="flex justify-center items-center text-[8px] md:text-[14px]  gap-2">
            <MdHighQuality size={20} />
            Best Quality
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-center text-4xl my-5 text-[#d4af33]">Categories</h2>

        <div className="bg-gray-200 rounded-xl shadow-xl m-2 md:m-5 p-4  md:p-6">
          <ul className="flex flex-wrap items-stretch justify-around gap-1 md:gap-2 lg:gap-4">
            {categories.map((data, id) => {
              return (
                <li
                  key={id}
                  className="bg-white mb-5 w-[25%] p-2 md:p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Link to={`/products/category/${data?.slug}`}>
                    <div className="flex items-center justify-between">
                      <img
                        src={ImgData[data?.name]}
                        alt={data?.name}
                        className="h-[40%] object-contain"
                      />
                    </div>
                    <p className="flex justify-center px-4 text-[8px] font-bold md:text-[14px]  mt-2 text-center">
                      {data?.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
