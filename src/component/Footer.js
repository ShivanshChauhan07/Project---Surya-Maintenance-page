import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#171717] text-white mt-40 ">
        <div className="flex justify-around p-20">
          <div>
            <h1 className="p-4 font-light text-2xl tracking-[0.5rem]">ABOUT</h1>
            <img className="w-52 h-11 my-4" src="./logo.png" alt="" />
            <p className="font-light text-sm my-5">
              G-25, Ring Road Mall, Plot No. 21, Managlam Place,
              <br /> Sector-3 Rohini, Delhi-110085
            </p>
          </div>
          <div>
            <h1 className="p-4 font-light text-2xl tracking-[0.5rem]">
              SERVICES
            </h1>
            <ul>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                HouseKeeping Services
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Horticulture and Landscaping
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Security Services
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Pest Control
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Waste Management
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Vendor Management
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Mechanical/Electrical Services
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                HVAC
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Water Mgmt & Plumbing
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Energy/safety Services
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Fire Fighting Services
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                CCTV
              </li>
            </ul>
          </div>
          <div>
            <h1 className="p-4 font-light text-2xl tracking-[0.5rem]">PAGES</h1>
            <ul>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Home
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                About Us
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Make an Appointment
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Contact Us
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Our Projects
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-white flex justify-between p-4 px-40">
        <div className="flex justify-around w-56">
          <div classname="icon ">
            <i class="fa fa-facebook-f "></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-twitter"></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-instagram"></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-google-plus"></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-envelope"></i>
          </div>
        </div>
        <h1 className="text-sm text-slate-400">
          Surya© 2023 All Rights Reserved{" "}
          <span className="text-[#f8b40e]">Terms of Use</span> and{" "}
          <span className="text-[#f8b40e]">Privacy Policy</span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
