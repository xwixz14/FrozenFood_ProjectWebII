import React from 'react'
import { Poppins, Roboto_Condensed } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400"], // Note: weight should be an array here for consistency
});

function Header() {
  return (
    <>
         <header
          className="w-full flex items-center justify-center relative h-[300px] md:h-[480px]"
          id="beranda"
        >
          {/* Tumpukan 1: Gambar */}
          <img
            src="/images/bg/bg1.jpg"
            className="absolute w-11/12 h-full object-cover md:object-cover rounded-lg z-0"
            alt="Background Image"
          />

          {/* Tumpukan 2: Background Abu-abu Transparan */}
          <div className="absolute bg-black bg-opacity-50 w-11/12 h-full rounded-lg z-10"></div>

          {/* Tumpukan 3: Teks */}
          <div className="absolute z-20 flex-col flex items-start justify-center text-white  px-8 md:ml-[5%]">
           <h1 className={`${poppins.className}text-wrap w-[99%] md:w-[49%] mb-4 text-xs md:text-lg font-medium`}
           >         Temukan suasana baru untuk ngopi di Nuju Space! Tempat yang
              nyaman, kopi yang nikmat, dan vibes yang santai. Ayo mampir!</h1>
            <button className={`${poppins.className} btn btn-secondary text-color2 font-bold hover:btn-primary hover:text-white text-xs md:text-base px-3 py-1 md:px-6 md:py-2 h-8 md:h-12 min-h-0 md:min-h-[48px]`}
            >
              Nuju Space
            </button>
          </div>
        </header>
    </>
  )
}

export default Header