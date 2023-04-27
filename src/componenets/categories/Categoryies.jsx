import React from "react";
import ProductCard from "../products/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Categcard from "./Categcard";
import { Loader } from "../../App";



const Categoryies = () => {
  
  const [datas, setData] = useState([]);
  const [loading, setLoad] = useState(false);
  const [catName, setCat] = useState("men's clothing");
  useEffect(() => {
    setLoad(true);
    const fetchdata = async () => {
      const data = await fetch("https://fakestoreapi.com/products/category/"+catName);
      const json = await data.json();
      setData(json);
      setLoad(false);
    }
      fetchdata().catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [catName]);

  const products = datas.map((data) => (
    <ProductCard
      key={data.id}
      id={data.id}
      title={data.title}
      image={data.image}
      price={data.price}
      link={data.id}
    />
  ));
  console.log(products);
  return (
    <div>
      <section className="container py-8">
        <div className=" mx-auto flex flex-col justify-center items-center">
          <h1
            className="text-4xl text-center font-bold text-gray-700 pb-4"
            onClick={() => setCat("women's clothing")}
          >
            Categories
          </h1>
          <div className="categorys flex gap-5 group-first:bg-red-500  my-5 ">
            <Categcard
              title="men's clothing"
              color="gray"
              icon=" fa-shirt "
              onclick={() => setCat("men's clothing")}
            />
            <Categcard
              title="women's clothing"
              color="red"
              icon="person-dress "
              onclick={() => {
                setCat("women's clothing");
              }}
            />
            <Categcard
              title="jewelery"
              color="yellow"
              icon=" fa-gem"
              onclick={() => {
                setCat("jewelery");
              }}
            />
            <Categcard
              title="electronics"
              color="green"
              icon="circle-nodes"
              onclick={() => setCat("electronics")}
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 pb-4 duration-500 ease-in-out">
            {catName} <i className="fa fa-star text-success"></i>
          </h1>
          <p className="text-gray-600 leading-loose">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-wrap justify-center duration-500 ease-in-out gap-4 mt-8">
          {loading ? <Loader /> : products}
        </div>
      </section>
    </div>
  );
};

export default Categoryies;
