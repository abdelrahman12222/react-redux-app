import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../img/banner_img_01.jpg";
import img2 from "../img/banner_img_02.jpg";
import img3 from "../img/banner_img_03.jpg";
import SliderCard from "./SliderCard";
const Slider = () => {
  return (
    <>
      {/* Start Banner Hero */}
      <div className="hero my-20 bg-gray-100">
          <Carousel

            autoPlay
            infiniteLoop
            showStatus={false}
            swipeable={false}
            showThumbs={false}

            className="carousel"
          >
            <SliderCard
              image={img1}
              firsttitle="Proident occaecat"
              secondtitle="Aliquip ex ea commodo consequat"
              details="You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites."
            />
            <SliderCard
              image={img2}
              firsttitle="Repr in voluptat"
              secondtitle="Ullamco laboris nisi ut"
              details="We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you."
            />
            <SliderCard
              image={img3}
              firsttitle="Zay eCommerce"
              secondtitle="Tiny and Perfect eCommerce Template"
              details="Zay Shop is an eCommerce HTML5 CSS template with the latest version of Bootstrap 5 (beta 1). This template is 100% free."
            />
          </Carousel>
        </div>
    </>
  );
};

export default Slider;
