import React, { useState } from "react";
import { assets } from "../assets/assets";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto
    p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Company
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.company_img}
          alt=""
          style={{ clipPath: "ellipse(65% 75% at 30% 70%)" }}
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">5</p>
              <p>Google Stars</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">200+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">150+</p>
              <p>Happy Families</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">8</p>
              <p>Years in Service</p>
            </div>
          </div>

          {!showMore && (
            <p className="my-10 max-w-lg">
              About 8 years ago, Er. Prakash Mahato began helping relatives build
              their homes in Pokhara. His commitment to quality quickly stood
              out, and soon, more families began turning to him for their
              projects...
            </p>
          )}

          {showMore && (
            <p className="my-10 max-w-lg">
              About 8 years ago, Er. Prakash Mahato began helping relatives build
              their homes in Pokhara. His commitment to quality quickly stood
              out, and soon, more families began turning to him for their
              projects. That’s how Public Builders and Suppliers was founded.
              Today, we’re a team of 10+ professionals and have proudly built
              over 200 homes across Pokhara. We specialize in residential
              construction and interior design—and hundreds of families have
              trusted us to bring their dream homes to life.
            </p>
          )}

          <button
            className="bg-black text-white px-8 py-2 rounded cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Learn more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
