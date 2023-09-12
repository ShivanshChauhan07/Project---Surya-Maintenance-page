import React from "react";

const Breif = () => {
  return (
    <div className="mt-16 ">
      <div className="flex justify-around p-3 px-64 my-4">
        <div>
          <div className="bg-slate-300 p-4 w-20 h-20 mx-auto text-center rounded-full hover:bg-pink-600">
            <i className="fa fa-heart text-5xl text-slate-700 hover:text-white"></i>
          </div>
          <h4 className="p-3 font-bold">QUALITY EXCELLENCE</h4>
        </div>
        <div>
          <div className="bg-slate-300 p-4 w-20 h-20 mx-auto text-center rounded-full hover:bg-pink-600">
            <i className="fa fa-globe text-5xl text-slate-700 hover:text-white"></i>
          </div>
          <h4 className="text-center p-3 font-bold">
            INFRASTRUCTURE <br /> EXCELLENCE
          </h4>
        </div>
        <div>
          <div className="bg-slate-300 p-4 w-20 h-20 mx-auto text-center rounded-full hover:bg-pink-600">
            <span className="fa fa-star text-5xl text-slate-700 hover:text-white"></span>
          </div>
          <h4 className="p-3 font-bold">SERVICE EXCELLENCE</h4>
        </div>
        <div>
          <div className="bg-slate-300 p-4 w-20 h-20 mx-auto text-center rounded-full hover:bg-pink-600">
            <i className="fa fa-paper-plane text-5xl text-slate-700 hover:text-white"></i>
          </div>
          <h4 className="p-3 font-bold">OPERATIONAL EXCELLENCE</h4>
        </div>
      </div>
      <hr
        style={{ backgroundColor: "red", color: "red" }}
        className="w-2/3 mx-auto "
      />
      <p className="px-28 my-4 text-lg font-thin">
        THE SURYA MAINTENANCE AGENCY PVT LTD (SMAPL) COMPANY IN INDIA BASED IN
        DELHI NCR REGION , HAS A PRESENCE ACROSS THE DELHI WITH MORE THAN 600
        EMPLOYEES AND MANY OFFICES ACROSS DELHI, INDIA. OUR PORTFOLIO OF
        SERVICES INCLUDES TO PROVIDE BEST FACILITY MANAGEMENT SERVICES TO OUR
        PRESTIGIOUS CLIENTS IN OUR COMMERCIAL AND SHOPPING MALLS.
      </p>
      <hr
        style={{ backgroundColor: "red", color: "red" }}
        className="w-2/3 mx-auto "
      />
    </div>
  );
};

export default Breif;
