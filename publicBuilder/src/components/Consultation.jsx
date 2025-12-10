import React from 'react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'

const Consultation = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-[#b3b3b6] px-6">
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg text-gray-800">
          
          {/* Close Button */}
          <div className="flex justify-end">
            <i
              className="fa-solid fa-xmark text-xl cursor-pointer hover:text-red-600"
              onClick={() => navigate('/')}
            ></i>
          </div>

          <h2 className="text-3xl text-center text-maroon-700 font-semibold mb-4">
            Book a Free Consultation
          </h2>

          {/* Full Name */}
          <div className="mt-4">
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full h-12 border-2 border-gray-300 rounded-md px-4 mt-1 outline-none focus:border-gray-500"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full h-12 border-2 border-gray-300 rounded-md px-4 mt-1 outline-none focus:border-gray-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label className="block font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              required
              className="w-full h-12 border-2 border-gray-300 rounded-md px-4 mt-1 outline-none focus:border-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-14 bg-gray-900 text-white rounded-lg shadow-md mt-6 text-lg font-medium hover:bg-gray-700 transition"
          >
            Yes, I want a Free Consultation
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Consultation;
