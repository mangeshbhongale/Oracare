import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row justify-center items-center">
      <div className="img flex justify-center w-full md:w-2/4 h-auto py-4 md:py-[90px] px-4 md:px-[100px]">
        <img src="images/about.png" className="h-auto w-full md:w-3/4" alt="" />
      </div>
      <div className="text w-[90%] md:w-2/4 flex flex-col gap-4 px-4 md:px-0">
        <h4>About Oracare</h4>
        <h1 className="text-[22px] md:text-4xl font-bold">
          From Routine Check-Ups to <br /> Complex Procedures
        </h1>
        <p className="text-[#808080] w-[90%] md:w-[90%]">
          Welcome to Oracare, your trusted destination for comprehensive oral
          and maxillofacial care. At the helm of our dedicated team are Dr.
          Sujit Vyavahare (BDS, MDS - Oral & Maxillofacial Surgery) and his
          wife, Dr. Madhura Vyavahare (BDS, MDS - Prosthodontist And Crown
          Bridge). Dr. Sujit Vyavahare brings over 4 years of invaluable field
          experience as an oral and maxillofacial surgeon, implantologist, and
          dental surgeon. He also shares his expertise as a lecturer at Dy Patil
          Dental School, ensuring that our practice remains at the forefront of
          dental innovation. Dr. Madhura Vyavahare, a prosthodontist,
          implantologist, and dental surgeon, complements our team with her 4
          years of clinical excellence. Together, they are committed to
          providing you with the highest standard of dental care, ensuring your
          oral health and well-being are in expert hands. Discover the Oracare
          difference today.
        </p>
        <div className="buttoncon w-full md:w-3/4 flex justify-between">
          <button className="bg-[#99c04c] text-white py-3 md:py-5 px-6 mb-2 md:px-10">
            Get Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
