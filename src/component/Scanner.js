import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const Scanner = ({ closeModal, name, setName }) => {
  const VideoRef = useRef(null);
  let stream = null;
  let video = null;
  let myInterval = null;
  let fullFaceDescription = null;
  let detection = null;
  const labels = ["Shivam", "Tanishka", "Rita"];

  const stopCamera = () => {
    stream.getTracks().forEach(function (track) {
      track.stop();
    });
  };

  const getUserCamera = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    video = VideoRef.current;

    video.srcObject = stream;
    video.play();
  };

  const faceDetection = async () => {
    await faceapi.loadSsdMobilenetv1Model("../../weights");
    await faceapi.loadFaceLandmarkModel("../../weights");
    await faceapi.loadFaceRecognitionModel("../../weights");

    myInterval = setInterval(async () => {
      detection = await faceapi
        .detectAllFaces(video)
        .withFaceLandmarks()
        .withFaceDescriptors();
      console.log("detection" + detection);
      // faceRecognition();
    }, 1000);
    setTimeout(() => {
      faceRecognition();
    }, 1000);
  };

  const faceRecognition = async () => {
    const labeledFaceDescriptors = await Promise.all(
      labels.map(async (label) => {
        const imgUrl = `${label}.jpg`;
        const img = await faceapi.fetchImage("../../images/employee/" + imgUrl);

        fullFaceDescription = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();

        if (!fullFaceDescription)
          throw new Error(`no faces detected for ${label}`);

        const faceDescriptor = [fullFaceDescription.descriptor];
        return new faceapi.LabeledFaceDescriptors(label, faceDescriptor);
      })
    );

    const maxDescriptorDistance = 0.6;
    const faceMatcher = new faceapi.FaceMatcher(
      labeledFaceDescriptors,
      maxDescriptorDistance
    );
    console.log(detection);
    const results = detection.map((fd) =>
      faceMatcher.findBestMatch(fd.descriptor)
    );
    setName(results[0]["_label"]);
    closeModal(false);
    // alert(
    //   `Welcome ${results[0]["_label"]} your attendance has been captured. Click on Done button`
    // );
    console.log(name);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  useEffect(() => {
    getUserCamera();
    faceDetection();
    return () => {
      stopCamera();
      clearInterval(myInterval);
    };
  }, [VideoRef]);

  return (
    <>
      <div className="fixed left-0 right-0 bottom-0 top-0 bg-slate-200 bg-opacity-50 "></div>
      <div className="flex flex-col justify-center items-center rounded-md shadow-md shadow-slate-600 bg-white absolute pt-9 z-10 top-1/2  w-2/4 h-4/6 left-1/2 -translate-x-1/2 ">
        <h1
          onClick={() => closeModal(false)}
          className="text-white font-bold text-3xl bg-red-600 p-2 rounded-md absolute right-3 top-3 cursor-pointer"
        >
          X
        </h1>
        <h1 className="font-rob font-medium text-lg text-red-500">
          Keeping the head still While scanning face{" "}
        </h1>

        <video className="w-80 h-80 rounded-md " src="" ref={VideoRef}></video>
        <button
          className="rounded-sm bg-green-500 p-3  w-28 text-white text-lg font-rob font-medium tracking-wider"
          onClick={() => closeModal(false)}
        >
          Scanning...
        </button>
      </div>
    </>
  );
};

export default Scanner;
