import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  function top() {
    return window.scrollTo(0, 0);
  }
  return (
    <Link to={"view/" + props.id} onClick={top}>
      <div key={props.id} className="product-card ">
        
  
        <div className="relative  flex flex-col items-center overflow-hidden ">
          {" "}
          <img
            src={props.image}
            alt=""
            className="rounded-t-lg   overflow-hidden max-w-[210px]    max-h-[130px] min-h-[130px] "
          />{" "}
          <div className="pt-4">
            {" "}
            <h5
              className="text-sm font-medium text-gray-900 overflow-hidden max-w-[192px]  max-h-6 min-h-6
           title-font mb-2"
            >
              {" "}
              {props.title}{" "}
            </h5>{" "}
            <p className="leading-relaxed text-base text-gray-500">
              {" "}
              <span className="font-bold">EGP {props.price}</span>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* <Link
          className="text-sm font-bold bg-indigo-500 hover:bg-indigo-700 text-white rounded-md px-4 py-2 shadow"
          onClick={top}
          to={`view/${props.link}`}
        >
          {" "}
          View{" "}
        </Link>{" "} */}
      </div>
    </Link>
  );
};

export default ProductCard;
