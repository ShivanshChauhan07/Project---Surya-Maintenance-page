import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import "../App.css";

const SmallCarousel = ({ data, width, height }) => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSlide((prev) => (prev + 1) % data.length);
    }, 4000);
  }, []);

  return (
    <>
      <div
        className=" cursor-pointer before:relative before:block before:w-16 before:h-16 before:bg-white before:rounded-full before:opacity-50 before:bottom-1 before:left-80 before:hover:opacity-100"
        onClick={() => {
          setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
        }}
      >
        <ChevronLeft className="relative left-80 bottom-12 text-neutral-400 my-auto mx-auto cursor-pointer" />
      </div>
      {data.map((singleData, index) => {
        return (
          <div
            key={index}
            className={
              slide === index
                ? `hero h-48 w-72 flex-shrink-0 mx-auto`
                : "hidden"
            }
          >
            <img
              src={singleData.url}
              alt="img"
              className={`h-44 w-60 rounded-lg mx-auto `}
            />
            <h2 className="p-2 text-white font-semibold">
              {singleData.content}
            </h2>
          </div>
        );
      })}
      <div
        className="before:relative before:block before:w-16 before:h-16 before:bg-white before:rounded-full before:opacity-40 before:right-80 before:bottom-3 before:hover:opacity-100 before:hover:cursor-pointer"
        onClick={() => {
          setSlide((prev) => (prev + 1) % data.length);
        }}
      >
        <ChevronRight className=" relative right-80 bottom-14 text-neutral-400 mx-auto cursor-pointer" />
      </div>
    </>
  );
};

export default SmallCarousel;
