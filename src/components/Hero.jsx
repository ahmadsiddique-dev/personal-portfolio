import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="flex items-center md:max-w-[65vw] mx-auto md:gap-0 gap-9 justify-around flex-col md:flex-row">
        <div className="w-64  h-64">
          <img
            className="object-contain rounded-full w-full h-full"
            src="https://ahmadsiddique.vercel.app/assets/profile.png"
            alt="profile-picture"
          />
        </div>
        <div>
          <h1 className=" text-center flex items-center flex-col justify-end text-4xl">
            <div>
                Yes, I'm
            </div>
            <div className="metallic-text momo-signature-regular">
              <div className="">Ahmad</div>
              <div>Siddique</div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
