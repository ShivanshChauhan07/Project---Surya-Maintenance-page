import React from "react";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <>
      <div>
        {" "}
        <h1 className="text-center p-4 m-16 font-semibold text-2xl">
          OUR ONGOING AND UPCOMING SITE'S
        </h1>
      </div>
      <div className="flex flex-col flex-wrap items-center">
        <div className="group flex flex-col justify-end bg-mall1 bg-cover bg-center border-2 border-slate-50 rounded-md h-72 m-2 w-72 transition-all hover:scale-105 hover:shadow-slate-800 hover:shadow-md duration-500">
          <div className="text-center text-slate-100 p-4 m-4 transition-all  duration-1000 opacity-0 font-medium text-lg group-hover:opacity-100 group-hover:bg-slate-200 group-hover:bg-opacity-10 group-hover:animate-bounce ">
            <Link to={"/ringRoad"}>
              {" "}
              <h1>Go to Attendance Page</h1>
            </Link>
          </div>
        </div>
        <div className="bg-mall2 bg-cover bg-center border-2 border-slate-50 rounded-md h-72 m-2 w-72 transition-all hover:scale-105 hover:shadow-slate-800 hover:shadow-md duration-500"></div>
        <div className="bg-mall3 bg-cover bg-center border-2 border-slate-50 rounded-md h-72 m-2 w-72 transition-all hover:scale-105 hover:shadow-slate-800 hover:shadow-md duration-500"></div>
        <div className="bg-mall4 bg-cover bg-center border-2 border-slate-50 rounded-md h-72 m-2 w-72 transition-all hover:scale-105 hover:shadow-slate-800 hover:shadow-md duration-500"></div>
      </div>
    </>
  );
};

export default Attendance;
