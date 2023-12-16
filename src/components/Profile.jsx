import React from "react";

const Profile = () => {
  return (
    <div id="ourteam" className="w-full min-h-screen flex flex-col justify-center items-center md:mb-16 md:pb-10 px-4">
      <h5 className="mt-1 md:mt-1 text-center">OUR TEAM</h5>
      <h1 className="text-2xl font-bold mb-6 text-center w-full md:text-4xl">
        Meet Our Expert Doctors
      </h1>
      <div className="procard-cont md:flex md:flex-row flex-col md:gap-60 justify-center items-center w-full md:mb-16">
        <div className="card w-full md:w-96 h-auto md:h-96 border-2 border-black rounded-[20px] flex flex-col items-center gap-5 mb-5">
          <img src="images/Dr.Sujit.png" className="rounded-[20px]" alt="" />
          <h1 className="text-xl md:text-2xl font-semibold text-center">
            Dr. Sujit Vyavahare
          </h1>
          <h2 className="text-sm md:text-[16px] font-bold text-center">
            (BDS, MDS - Oral & Maxillofacial Surgery)
          </h2>
          <p className="text-xs md:text-base font-medium text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            cumque dicta et sequi hic beatae.
          </p>
          <button className="bg-[#99c04c] text-white py-2 md:py-3 mb-2 px-6 md:px-10">
            Contact Now
          </button>
        </div>
        <div className="card w-full md:w-96 h-auto md:h-96 border-2 border-black rounded-[20px] flex flex-col items-center gap-5 mt-4 md:mt-0">
          <img src="images/Dr.Madhura.png" className="rounded-[20px]" alt="" />
          <h1 className="text-xl md:text-2xl font-semibold text-center">
            Dr. Madhura Vyavahare
          </h1>
          <h2 className="text-sm md:text-[16px] font-bold text-center">
            (BDS, MDS - Prosthodontist And Crown Bridge)
          </h2>
          <p className="text-xs md:text-base font-medium text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            cumque dicta et sequi hic beatae.
          </p>
          <button className="bg-[#99c04c] text-white py-2 mb-2 md:py-3 px-6 md:px-10">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
