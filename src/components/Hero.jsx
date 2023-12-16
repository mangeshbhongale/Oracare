import React from "react";

const Hero = () => {
  return (
    <div id="home" className="w-full md:mt-14 min-h-screen flex flex-col-reverse gap-8  md:flex-row justify-center items-start pt-28 px-10">
      <div className="text w-full md:w-1/2 flex items-center  justify-center">
        <div className="actualtext w-[80%] h-auto flex flex-col justify-start items-start gap-7 ">
          <h4 className="uppercase font-semibold flex gap-4 items-center">
            <img src="images/tooth.png" alt="" className="h-6 md:h-auto" />
            We Give You The Best !
          </h4>
          <h1 className="text-2xl md:text-4xl font-bold text-start md:text-start w-full ">
            Multispeciality Dental Clinic <br />
            and Implant Center
          </h1>
          <p className="text-[#808080] text-sm md:text-base">
            Welcome to Oracare, your premier destination for exceptional dental
            care. Our clinic is renowned for its multispeciality approach,
            offering a wide range of dental services from routine check-ups to
            advanced procedures. At Oracare, we pride ourselves on our
            state-of-the-art Implant Center, where skilled professionals use the
            latest technology to restore smiles. Our commitment to patient
            comfort and satisfaction ensures a seamless and positive dental
            experience. Trust Oracare for all your dental needs.
          </p>
          <div className="buttoncon w-full flex flex-col md:flex-row justify-start gap-4 md:gap-8">
            <button className="bg-[#99c04c] text-white py-3 md:py-5 px-6 md:px-10">
              Get Appointment
            </button>
            <button className="border-2 border-black py-3 md:py-5 px-4 md:px-5">
              See How Can We Help
            </button>
          </div>
        </div>
      </div>
      <div className="image w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <img
          src="images/hero.png"
          className="h-auto md:h-[70%] w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
