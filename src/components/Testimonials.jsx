import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        padding: "10px",
        borderRadius: "50%",
        border: " 1px grey solid",
      }}
      onClick={onClick}
    >
      <img className="h-[13px] w-[13px]" src="images/right-arrow.png" alt="" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        padding: "10px",
        borderRadius: "50%",
        border: " 1px grey solid",
      }}
      onClick={onClick}
    >
      <img className="h-[13px] w-[13px] " src="images/left-arrow.png" alt="" />
    </button>
  );
}

const Testimonials = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Removed nextArrow and prevArrow properties
  };

  return (
    <div id="testimonials" className="bg-[#ebfacb]  w-full h-auto">
      <h1 className="text-4xl font-bold mb-6 text-center pt-8 w-full px-3">
        What People Say's
      </h1>
      <div className="bg-[#ebfacb] flex w-full h-auto">
        <div className="testimg w-[50%]  items-center justify-end border-r-2 py-[15px] hidden md:flex">
          <img
            src="images/tooth-smile.png"
            className="h-[80%] w-[50%]"
            alt=""
          />
        </div>
        <div className="testimonial py-[20px] px-10 w-[90%] md:w-[70%] flex flex-col items-center">
          <Slider ref={setSlider} className="w-full px-3" {...settings}>
            <div className="w-full mt-8">
              <h1 className="text-2xl font-bold mb-3">Hrushikesh Bhongale</h1>

              <img
                src="images/right.png"
                alt=""
                className="h-[50px] mb-3 rotate-180"
              />
              <div className="stars flex w-[22x] h-[22px] mb-3 gap-1">
                <img src="images/golden-tooth.png" alt="" />
                <img src="images/golden-tooth.png" alt="" />
                <img src="images/golden-tooth.png" alt="" />
                <img src="images/golden-tooth.png" alt="" />
                <img src="images/golden-tooth.png" alt="" />
              </div>
              <p className="w-[90%] mb-2 text-[17px] font-medium text-[#464545]">
                Dr. Sujit exceeded my expectations with my wisdom teeth surgery.
                He thoroughly explained the procedure, calming my nerves with
                his expertise. The surgery itself was painless, with Dr. Sujit
                prioritizing my comfort throughout. Their constant care and
                attentiveness made me feel utterly secure in their capable
                hands. Dr. Sujit is the epitome of dental professionalism and I
                wholeheartedly recommend them for any dental needs!
              </p>
            </div>
            {/* <div className="w-full mt-8">
              <h1 className="text-2xl font-bold mb-3">Hrushikesh Bhongale</h1>

              <img
                src="images/right.png"
                alt=""
                className="h-[50px] mb-3 rotate-180"
              />
              <div className="stars flex w-[22x] h-[22px] mb-3 gap-1">
                <img src="images/golden-tooth.png" alt="" />
                <img src="images/golden-tooth.png" alt="" />
                <img src="images/golden-tooth.png" alt="" />
                <img src="images/golden-tooth.png" alt="" />
              </div>
              <p className="w-[80%] mb-2 text-[17px] font-medium text-[#464545]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                ipsum enim blanditiis voluptas optio quisquam sed deleniti
                veniam unde incidunt. Debitis natus nam rerum facere. Ab quis
                odio assumenda fugit?
              </p>
            </div> */}
          </Slider>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
              width: "100%",
              marginTop: "10px",
              padding: "0rem 0.7rem",
            }}
          >
            <SamplePrevArrow onClick={() => slider?.slickPrev()} />
            <SampleNextArrow onClick={() => slider?.slickNext()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
