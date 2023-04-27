import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Clear, Remove_Item } from "../../store/slices/CartSlice";

const StorePage = (props) => {
  const dispatch = useDispatch();
  const productlist = useSelector((state) => state.cartitems);
  const totalprice = productlist.reduce((acc, product) => {
    acc += product.price * product.quantity;

    return acc;
  }, 0);
  return (
    <div
      className={` storepage shadow-lg
       shadow-black text-white container mx-auto py-6 ${props.cla} `}
    >
      <div className="md:flex flex flex-col md:items-center">
        <h1 className="text-xl text-center font-bold my-3 text-yellow-500">
          Total Price: {totalprice.toFixed(2)} $
        </h1>
        <div className=" cart-container   max-h-[430px]">
          <div className="  ">
            {productlist.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col   text-white mb-2 rounded-sm shadow shadow-slate-950 p-3 relative bg-slate-900"
              >
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} width={65} />
                  <div className="ml-6">
                    <p className=" text-xs  my-1 text-amber-600">
                      Stock:{item.quantity}
                    </p>
                    <h2 className="text-xs overflow-hidden    max-h-10 font-bold">
                      {item.title}
                    </h2>
                    <p className="text-yellow-300 text-sm my-1">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    console.log(item);

                    dispatch(Remove_Item(item));
                  }}
                  className="  text-sm w-7 h-7 close   bg-red-500 hover:bg-green-600 text-white rounded-full"
                >
                  <i className=" fa fa-close"></i>
                </button>
                <div className=" flex mt-3">
                  <button className=" bg-red-800 rounded-lg px-2 py-1 mx-1 text-xs    hover:bg-red-900 duration-300 ">
                    <i className=" fa fa-minus"></i> Remove Stock
                  </button>
                  <button className=" bg-green-800 rounded-lg px-2 py-1 mx-1 text-xs hover:bg-green-900  duration-300">
                    <i className=" fa fa-plus"></i> Add Stock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className=" flex  gap-2">
          {/* <p className="text-lg font-bold">Total: ${cartCount}</p> */}
          <button
            className="mt-4 w-full inline-block text-sm p-2  shadow-sm
       shadow-slate-950 bg-green-500 hover:bg-green-600 text-white rounded-lg"
          >
            Checkout
          </button>
          <button
            onClick={() => dispatch(Clear())}
            className="mt-4 w-full inline-block text-sm p-2 shadow-sm
            shadow-slate-950 bg-red-700 hover:bg-red-800 text-white rounded-lg"
          >
            Clear The Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
