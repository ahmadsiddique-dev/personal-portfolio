import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-around mx-auto md:max-w-[65vw] gap-10 md:gap-0">

        {/* Profile Image */}
        <div className="w-60 h-60 md:w-64 md:h-64 animate-fadeIn">
          <img
            className="w-full h-full object-cover rounded-full shadow-xl"
            src="https://ahmadsiddique.vercel.app/assets/profile.png"
            alt="profile"
          />
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            <span className="block text-gray-700 metallic-text2">
              Yes, I'm
            </span>

            <span className="block metallic-text momo-signature-regular">
              Ahmad <br /> Siddique
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
