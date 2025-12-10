import React from "react"
import { servicesData } from "../assets/assets";

const Services = () => {
  

  return (
    <section id = "Services" className="w-full min-h-auto grid place-items-center py-10 px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Services
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Your Needs, Our Priority
      </p>

      <div className="flex flex-wrap mt-4 w-full">
        {servicesData.map((service, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 text-center">
            <div className="group relative overflow-hidden border border-black w-full h-full p-6 md:p-8 bg-white rounded shadow-xl cursor-pointer transition-all duration-500
                            hover:bg-gradient-to-b hover:from-white hover:to-gray-800">
              
              {/* ICON */}
              <div className="h-10 w-10 mx-auto mb-4 rounded-full bg-black grid place-items-center text-white text-xl transition-all duration-500 group-hover:bg-white group-hover:text-black">
                <i className="fas fa-hammer"></i>
              </div>

              {/* TITLE */}
              <h3 className="text-[20px] font-semibold text-[#1f194c] my-4 group-hover:text-white">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[15px] leading-relaxed tracking-wide text-black group-hover:text-gray-200">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
