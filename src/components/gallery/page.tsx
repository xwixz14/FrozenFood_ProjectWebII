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
function Gallery() {
  return (
    <>
      <div
        className="w-full pl-12 pr-12 pt-[25px] mt-25px mb-25px"
        id="gallery"
      >
        <div className="mb-25px mt-35px">
          <h1
            className={`${poppins.className} font-bold text-center text-2xl text-color2`}
          >
            Gallery
          </h1>
        </div>
        <div className="carousel rounded-box w-full h-96 ">
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery3.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery4.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery5.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery6.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery7.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery8.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery9.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery10.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery11.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery12.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery13.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/gallery/gallery14.jpg"
              alt="Burger"
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
