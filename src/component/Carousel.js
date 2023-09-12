import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../App.css";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSlide((prev) => (prev + 1) % data.length);
    }, 5000);
  }, []);
  return (
    <div className="flex h-[500px] overflow-hidden relative z-20">
      <div className="absolute w-20 h-[600px] hover:bg-slate-50 hover:opacity-40 "></div>
      <BsArrowLeftCircleFill
        className="absolute text-white w-8 h-8 bottom-[267px] mx-auto cursor-pointer hover:text-slate-400 left-6"
        onClick={() => {
          setSlide((prev) => {
            return prev === 0 ? data.length - 1 : prev - 1;
          });
        }}
      />
      {data.map((singleData, index) => {
        return (
          <img
            src={singleData}
            alt="img"
            className={slide === index ? "hero2 w-full" : "hidden"}
          />
        );
      })}
      <div className="absolute w-20 h-[600px] right-0 hover:bg-slate-50 hover:opacity-40"></div>
      <BsArrowRightCircleFill
        className="absolute right-6 bottom-[-29px] text-white w-8 h-8 my-72 mx-auto cursor-pointer hover:text-slate-400  "
        onClick={() => {
          setSlide((prev) => (prev + 1) % data.length);
        }}
      />
    </div>
  );
};

export default Carousel;
