import React from "react";
import "./Homecard.scss"
const HomeCard = ({ icon,iconbg,shadowbg, title, nums, percent, percentdesc }) => {
  return (
    <div className="homecard  bg-gray-50 ">
      <div className="card-header p-2 mb-3 ">
        <div
          className={` ${icon} ${iconbg} bg-blue-600 w-16 
          -top-4 flex justify-center flex-col text-white h-16  ${shadowbg} shadow-sm text-center 
          rounded-xl  absolute`}
        >
          <i className="material-icons opacity-10  "></i>
        </div>
        <div className="text-end pt-1">
          <p className="text-sm mb-0 text-gray-600 font-thin">{title}</p>
          <h4 className="mb-0 text-gray-900 font-bold text-xl">{nums}</h4>
        </div>
      </div>
      <hr className="dark horizontal my-0" />
      <div className="card-footer p-3">
        <p className="mb-0 text-gray-600 text-sm font-thin">
          <span className="text-green-600 text-sm  font-bold">{percent} </span>
          {percentdesc}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
