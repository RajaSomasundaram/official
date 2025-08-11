import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const Myplace = () => {
  return (
    <section className="pb-20">
      <div className="mt-8  grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-sky-100 mb-4">My Stack.</h3>
          <div className="flex flex-col flex-nowrap justify-center gap-5 items-baseline w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg bg-[#b8b8b8]">
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">Responsive Design</div>
                <Star className="text-green-500" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">HTML5/CSS3 Mastery</div>
                <Star className="text-green-500" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">UI/UX Expertise</div>
                <Star className="text-green-500" />
                <span></span>
              </div>
            </Marquee>
            <Marquee direction="right" speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">JavaScript Proficiency</div>
                <Star className="text-green-500" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">Collaborative Team Player</div>
                <Star className="text-green-500" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">Design Tools Mastery</div>
                <Star className="text-green-500" />
                <span></span>
              </div>
            </Marquee>
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">Keeping Abreast of Trends</div>
                <Star className="text-green-500" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">Problem Solving</div>
                <Star className="text-green-500" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">Attention to Detail</div>
                <Star className="text-green-500" />
                <span></span>
              </div>
            </Marquee>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold text-sky-100 mb-4">My Special Place.</h3>
          <div className="relative w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25457.84316788748!2d77.66640794937555!3d11.442838564150277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969d702b47dc1%3A0x2bca1b88fb019719!2sBhavani%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1754943814567!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myplace;
