import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "react-loader-spinner";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
// import { Add, Remove } from "../../store/actions/Cart-actions";
import { Add_Item } from "../../store/slices/CartSlice";
import StorePage from "./StorePage";
const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [cartCount, setCartCount] = useRecoilState(textState);
  const cartCount = useSelector((state) => state.carts);

  const productlist = useSelector((state) => state.cartitems);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const fetchdata = async () => {
      const data = await fetch("https://fakestoreapi.com/products/" + id);
      const json = await data.json();
      setProduct(json);
      setIsLoading(false);
    };
    console.log(fetchdata());
    fetchdata().catch(console.error);
  }, [id]);

  const addToCart = (item) => {
    // dispatch(Add_Cart(1));
    dispatch(Add_Item(item));
    // setlist((prevList) => [...prevList, item]);

    toast.success("Added to cart!",{
      autoHideDuration: 500,
      closeOnEscape: true,
      closeOnClick: true,
      position: "top-center",
    }
  
    
    );
    
  };

  const removeFromCart = (index) => {

    toast.error("Removed from cart");
  };
  console.log(productlist);
  if (isLoading) {
    return (
      <div className=" flex flex-col justify-center items-center my-48">
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="loading"
          radius="12.5"
        />
      </div>
    );
  }

  return (
    <div class="container view-products mx-auto flex mt-20 flex-wrap gap-6 justify-center p-5">
      <div class="w-full md:w-1/3">
        <div class="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="mx-auto max-h-80 transition duration-300 ease-in-out transform hover:scale-110 rounded-lg "
          />
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <div class="details py-8 flex flex-col justify-between">
          <h2 class="text-emerald-700 font-semibold text-lg tracking-wide uppercase">
            {product?.category}
          </h2>
          <h1 class="text-2xl font-bold text-slate-900 my-2">
            {product?.title}
          </h1>
          <p class="text-sm font-bold my-3 text-gray-800">
            {product?.description}.
          </p>
          <div class="flex items-center mt-4 mb-6">
            <div class="text-yellow-500 mr-1  text-xl">
              <i className="fa fa-star"></i>
            </div>
            <span class="text-xl  font-medium text-gray-600">
              {product?.rating.reviews}
            </span>
          </div>
          <h3 class="text-xl font-bold text-gray-800">EGP {product?.price}</h3>
       
          {cartCount == 0 ? (
            <>
              <button
                class="bg-blue-500 w-40 hover:bg-blue-600 text-white font-semibold 
               py-2 px-3 rounded-full my-4 flex items-center transition duration-200 ease-in-out"
                onClick={() => addToCart(product)}
              >
                <i className=" fa fa-cart-shopping mx-2"></i>{" "}
                <span>Add to Cart</span>
              </button>
            </>
          ) : (
            <div>
              <button
                className=" bg-red-600 rounded-lg p-2 text-white"
                onClick={() => removeFromCart()}
              >
                <i className=" fa fa-minus"></i>
              </button>
              <span> 1 in cart </span>
              <button
                className=" bg-green-600 rounded-lg p-2 text-white"
                onClick={() => addToCart(product)}
              >
                <i className=" fa fa-plus"></i>
              </button>
            </div>
          )}
          <ToastContainer 
          position="top-center"
          autoClose={1000}
          limit={5}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          transition={Zoom}
          pauseOnHover={false}
          theme="light"
          
          
          
          
          className={"mt-20"} />
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
