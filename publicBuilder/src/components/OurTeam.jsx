import React, { useRef } from "react";
import { assets, team } from "../assets/assets"; // ✅ import correctly

const { next_icon, back_icon } = assets; // ✅ destructure icons

const OurTeam = () => {
  const slider = useRef();
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -75) tx.current -= 25;
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) tx.current += 25;
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className="relative mx-auto mt-20 px-6 md:px-20">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Team
        </span>
      </h1>
      <p className="text-gray-500 w-full text-center mb-8">
       A Team Comitted to Quality and Excellence
      </p>

      <img
        src={next_icon}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black rounded-full p-3 w-12 cursor-pointer"
        onClick={slideForward}
      />

      <img
        src={back_icon}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black rounded-full p-3 w-12 cursor-pointer"
        onClick={slideBackward}
      />

      <div className="overflow-hidden">
        <ul
          ref={slider}
          className="flex transition-all duration-500"
          style={{ width: `${(team.length / 4) * 100}%` }}
        >
          {team.map((t, i) => (
            <li key={i} className="w-1/4 p-4">
              <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-3 transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.img}
                    className="w-16 h-16 rounded-xl border-4 border-gray-900"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{t.name}</h2>
                    <span className="text-red-900 font-semibold">{t.role}</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
