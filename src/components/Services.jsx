import React from "react";

const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center mt-10 bg-[#ebfacb] px-4 py-6">
      <h4 className="text-lg md:text-xl text-center mt-5">OUR SERVICES</h4>
      <h1 className="text-2xl md:text-3xl font-bold uppercase text-center my-4">Dental Services We Offer</h1>

      <div className="service-container w-full">
        <div className="servicebox text-center">
          <h4>Cosmetic Dentistry</h4>
          <div className="img-con">
            <img src="images/clean-tooth.png" alt="Cosmetic Dentistry" className="mx-auto" />
          </div>
          <p>Enhances smiles with whitening, veneers, and makeovers</p>
        </div>

        <div className="servicebox text-center">
          <h4>Orthodontics</h4>
          <div className="img-con">
            <img src="images/braces.png" alt="Orthodontics" className="mx-auto" />
          </div>
          <p>Corrects misalignments with braces and clear aligners</p>
        </div>

        <div className="servicebox text-center">
          <h4>Periodontal Care</h4>
          <div className="img-con">
            <img src="images/dental-cleaning.png" alt="Periodontal Care" className="mx-auto" />
          </div>
          <p>Treats gum diseases, offers deep cleanings and surgeries</p>
        </div>

        <div className="servicebox text-center">
          <h4>Dental Implants</h4>
          <div className="img-con">
            <img src="images/implant.png" alt="Dental Implants" className="mx-auto" />
          </div>
          <p>
            Provides natural-looking, durable replacements for missing teeth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
