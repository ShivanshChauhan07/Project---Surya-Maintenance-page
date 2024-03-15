import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Scanner from "./Scanner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Ringroad = () => {
  const [details, setDetails] = useState([
    {
      name: "",
      designation: "",
      shift: "",
      imgAdd: "",
    },
  ]);
  const [staffTime, setStaffTime] = useState([
    {
      name: "",
      timeIn: "",
      date: "",
      timeOut: "",
    },
  ]);
  const [showModal, setShowmodal] = useState(false);
  const [name, setName] = useState("");
  const [currTime, setCurrTime] = useState(``);
  const navigate = useNavigate();

  const sendTimings = async () => {
    const data = await axios.post("http://localhost:5000/att", {
      name: name,
      time: currTime,
      date: String(new Date().toLocaleDateString()),
    });
    // console.log(data);
  };

  const time = () => {
    const today = new Date();
    const hr = today.getHours() % 12;
    const mins = today.getMinutes();
    const AMPM = today.getHours() >= 12 ? "pm" : "am";
    const time = `${hr}:${mins} ${AMPM}`;
    // console.log(today.toLocaleDateString());
    // sendTimings(time);
    setCurrTime(time);
  };

  useEffect(() => {
    // console.log("see here staff " + staffTime?.timeOut);
    console.clear();
  }, [staffTime]);

  return (
    <>
      <Header />
      <div className="main bg-background1 bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center content-end items-center w-full h-[100vh] z-10 ">
          <div className="bg-white shadow-md shadow-white border border-white bg-blend-lighten opacity-90 rounded-md">
            <form action="" className="p-4">
              <h1 className="text-center p-2 font-rob text-4xl">
                Employee Details
              </h1>
              <div className="flex justify-between p-4 font-rob font-extralight text-lg">
                <label htmlFor="name">Name</label>
                <input
                  className="rounded-sm bg-stone-50 h-9 w-48"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  disabled
                />
              </div>
              <div className="flex justify-between p-4 font-rob font-extralight text-lg">
                <label htmlFor="designation">Designation</label>
                <input
                  className="rounded-sm bg-stone-50 h-9 w-48"
                  type="text"
                  placeholder="Designation"
                  name="designation"
                  value={
                    details?.designation === undefined
                      ? ""
                      : details?.designation
                  }
                  disabled
                />
              </div>
              <div className="flex justify-between p-4 font-rob font-extralight text-lg">
                <label htmlFor="shift">Shift</label>
                <input
                  className="rounded-sm bg-stone-50 h-9 w-48"
                  type="text"
                  placeholder="Shift"
                  name="shift"
                  value={details?.shift === undefined ? "" : details?.shift}
                  disabled
                />
              </div>
              <div className="flex justify-between p-4 font-rob font-extralight text-lg">
                <label htmlFor="Time In">Time In</label>
                <input
                  className="rounded-sm bg-stone-50 h-9 w-48"
                  type="text"
                  placeholder="Time In"
                  name="Time In"
                  value={
                    name && staffTime?.timeIn === undefined
                      ? currTime
                      : staffTime?.timeIn
                  }
                  disabled
                />
              </div>
              <div className="flex justify-between p-4 font-rob font-extralight text-lg">
                <label htmlFor="Time Out">Time Out</label>
                <input
                  className="rounded-sm bg-stone-50 h-9 w-48"
                  type="text"
                  placeholder="Time Out"
                  name="Time Out"
                  value={
                    staffTime?.timeIn && staffTime?.timeOut === undefined
                      ? currTime
                      : staffTime?.timeOut
                  }
                  disabled
                />
              </div>
              <div className="">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowmodal(true);
                    time();
                    // name && sendTimings();
                    if (name && staffTime?.timeOut === undefined) sendTimings();

                    // setTimeout(() => {
                    //   sendTimings();
                    // }, 9000);

                    name && navigate("/");
                  }}
                  className="rounded-md bg-green-500 text-white p-3 w-28 mx-48 my-2 "
                >
                  {!name ? "Scan Face" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bubbles flex justify-around w-full opacity-90 absolute bottom-[-55vh]">
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
          <img className="" src="./images/attendancePic/bubble.png" alt="" />
        </div>
        {showModal && (
          <Scanner
            closeModal={setShowmodal}
            name={name}
            setName={setName}
            details={details}
            setDetails={setDetails}
            setStaffTime={setStaffTime}
            staffTime={staffTime}
          />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Ringroad;
