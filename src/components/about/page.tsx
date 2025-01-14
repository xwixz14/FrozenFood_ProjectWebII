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

function About() {
  return (
    <>
      <div className="w-full pl-14 pr-14 pt-25px" id="about">
        <h1
          className={`${poppins} text-2xl font-semibold text-center mb-35px mt-35px text-color2  `}
        >
          About
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${poppins} text-left`}>
            <p className="font-semibold text-2xl text-color2">Our Cafe</p>
            <p className="text-wrap w-full text-md text-justify">
              Nuju Coffee & Space adalah kafe lokal yang berlokasi di Bandar
              Lampung, Indonesia. Kafe ini dikenal sebagai tempat yang
              menggabungkan musik, seni, kopi, dan makanan, menciptakan suasana
              yang nyaman bagi para pengunjung. Menariknya, Nuju Coffee & Space
              beroperasi 24 jam tanpa henti, memberikan fleksibilitas bagi
              pelanggan untuk berkunjung kapan saja.
            </p>
          </div>

          <div className="md:row-span-3 md:col-start-1 md:row-start-2">
            <img
              src="/images/about2.jpg"
              alt=""
              height={300}
              width={500}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:row-span-3 md:col-start-2 md:row-start-1">
            <img
              src="/images/about1.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:col-start-2 md:row-start-4">
            <p className="text-wrap w-full text-md text-justify">
              Caffe ini Berlokasi di pusat Kota Bandar Lampung, Jl. P. Antasari No.99, Tj.
              Baru, Kec. Sukabumi, Kota Bandar Lampung, Lampung 35122 Nuju Space
              menjadi salah satu pilihan tempat yang wajib dkunjungi karena
              selain pilihan menunya yang lezat juga memiliki spot-spot foto
              yang Instagramable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;