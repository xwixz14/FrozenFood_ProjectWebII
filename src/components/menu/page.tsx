import React from "react";
import { Poppins, Roboto_Condensed } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400"], // Note: weight should be an array here for consistency
});

function Menu() {
  return (
    <>
      <div className="w-full bg pl-14 pr-14 pt-25px" id="menu">
        <h1
          className={`${poppins} font-bold text-center text-2xl mt-35px mb-15px text-color2`}
        >
          Menu
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-4">
          <div className=" w-[100%] h-[95%] outline outline-color2 rounded-lg  ">
            <div className="  w-[100%] h-[85%] outline outline-color2 rounded-lg">
              <img
                src="/images/menu/menu1.jpg"
                alt=""
                className="object-cover w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="p-2">
              <h1
                className={`${roboto_condensed} font-bold text-2xl text-color1 drop-shadow-2xl `}
              >
                Rice Bowl
              </h1>
              <p className={`${poppins} font-medium text-lg `}>Rp. 18.000</p>
            </div>
          </div>

          <div className=" w-[100%] h-[95%] outline outline-color2 rounded-lg  ">
            <div className="  w-[100%] h-[85%] outline outline-color2 rounded-lg">
              <img
                src="/images/menu/menu2.jpg"
                alt=""
                className="object-cover w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="p-2">
              <h1
                className={`${roboto_condensed} font-bold text-2xl text-color1 drop-shadow-2xl `}
              >
                Hotdog Space
              </h1>
              <p className={`${poppins} font-medium text-lg `}>Rp. 15.000</p>
            </div>
          </div>

          <div className=" w-[100%] h-[95%] outline outline-color2 rounded-lg  ">
            <div className="  w-[100%] h-[85%] outline outline-color2 rounded-lg">
              <img
                src="/images/menu/menu3.jpg"
                alt=""
                className="object-cover w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="p-2">
              <h1
                className={`${roboto_condensed} font-bold text-2xl text-color1 drop-shadow-2xl `}
              >
                Mie ayam dabu dabu
              </h1>
              <p className={`${poppins} font-medium text-lg `}>Rp. 25.000</p>
            </div>
          </div>

          <div className=" w-[100%] h-[95%] outline outline-color2 rounded-lg  ">
            <div className="  w-[100%] h-[85%] outline outline-color2 rounded-lg">
              <img
                src="/images/menu/menu4.jpg"
                alt=""
                className="object-cover w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="p-2">
              <h1
                className={`${roboto_condensed} font-bold text-2xl text-color1 drop-shadow-2xl `}
              >
                White Chocolatte
              </h1>
              <p className={`${poppins} font-medium text-lg `}>Rp. 27.000</p>
            </div>
          </div>

          <div className=" w-[100%] h-[95%] outline outline-color2 rounded-lg  ">
            <div className="  w-[100%] h-[85%] outline outline-color2 rounded-lg">
              <img
                src="/images/menu/menu5.jpg"
                alt=""
                className="object-cover w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="p-2">
              <h1
                className={`${roboto_condensed} font-bold text-2xl text-color1 drop-shadow-2xl `}
              >
                Boloneles sambal
              </h1>
              <p className={`${poppins} font-medium text-lg `}>Rp. 25.000</p>
            </div>
          </div>

          <div className=" w-[100%] h-[95%] outline outline-color2 rounded-lg  ">
            <div className="  w-[100%] h-[85%] outline outline-color2 rounded-lg">
              <img
                src="/images/menu/menu6.jpg"
                alt=""
                className="object-cover w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="p-2">
              <h1
                className={`${roboto_condensed} font-bold text-2xl text-color1 drop-shadow-2xl `}
              >
                Bakso Space
              </h1>
              <p className={`${poppins} font-medium text-lg `}>Rp. 25.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
