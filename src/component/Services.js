import React from "react";
import "../App.css";

const Services = () => {
  return (
    <div className="p-14 text-center ">
      <h1 className="font-semibold text-7xl">Services</h1>
      <p className="my-4 font-medium text-lg">
        {" "}
        Best Facility Management Services To Our Prestigious Clients
      </p>

      <div className="service p-14 flex justify-evenly flex-wrap w-11/24 mx-auto">
        <div className="m-16">
          <div className="compass mx-10 relative  p-2">
            <i className="fa fa-home text-7xl my-1 mx-2"></i>
          </div>
          <h1 className="my-8 p-2">HouseKeeping Services</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-12 p-1">
            <i class="fa fa-tree text-7xl my-2 "></i>
          </div>
          <h1 className="my-8 ">Horticulture and landscaping</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-cogs text-7xl my-2"></i>
          </div>
          <h1 className="my-8 p-2">Security Services</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-compass text-7xl my-2 mx-3"></i>
          </div>
          <h1 className="my-8 p-2">Pest Control</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-exclamation-triangle text-7xl my-1 mx-2"></i>
          </div>
          <h1 className="my-8 p-3.5">Waste Management</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-group text-7xl my-2 mx-2"></i>
          </div>
          <h1 className="my-8 p-2">Vendor Management</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-road text-7xl my-1 mx-2"></i>
          </div>
          <h1 className="my-8 p-3.5">Parking Management</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-crosshairs text-7xl my-2 mx-3.5"></i>
          </div>
          <h1 className="my-8 p-2">Electrical Services</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-bitbucket text-7xl my-2 mx-4"></i>
          </div>
          <h1 className="my-8 p-2">HVAC</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-11 p-1">
            <i class="fa fa-tint text-7xl my-2"></i>
          </div>
          <h1 className="my-8 p-2">Water Mgmt & Plumbing</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-save text-7xl my-2 mx-4"></i>
          </div>
          <h1 className="my-8 p-2">Energy/Safety Services</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-fire-extinguisher text-7xl my-2 mx-4"></i>
          </div>
          <h1 className="my-8 p-2">Fire Fighting services</h1>
        </div>
        <div className="m-16">
          <div className="compass relative mx-10 p-1">
            <i className="fa fa-camera text-7xl my-2 mx-2"></i>
          </div>
          <h1 className="my-8 p-2">CCTV</h1>
        </div>
      </div>
      <hr
        style={{ backgroundColor: "red", color: "red" }}
        className="relative bottom-24 w-2/3 mx-auto my-0"
      />
    </div>
  );
};

export default Services;
