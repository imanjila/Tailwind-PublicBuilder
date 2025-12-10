import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#070606] pt-12 mt-24 text-white">
      
      {/* MAIN FOOTER */}
      <div className="max-w-[1140px] w-[90%] mx-auto flex flex-wrap justify-between">
        
        {/* CONTACT */}
        <div className="flex-1 min-w-[250px] mb-10 text-center">
          <h3 className="text-2xl md:text-[28px] mb-5 font-semibold">Contact Us</h3>
          <p className="w-[190px] mx-auto py-2">publicbuilders93@gmail.com</p>
          <p className="w-[190px] mx-auto py-2">Phone: 1234567890</p>
          <p className="w-[190px] mx-auto py-2">Address: abc 123</p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex-1 min-w-[250px] mb-10 text-center">
          <h3 className="text-2xl md:text-[28px] mb-5 font-semibold">Quick Links</h3>

          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Our Team", link: "/teams" },
              { name: "Services", link: "/services" },
              { name: "Projects", link: "/projects" },
            ].map((item, index) => (
              <li
                key={index}
                className="relative block pb-1 group cursor-pointer"
              >
                <a href={item.link} className="text-white group-hover:text-[#f18930] transition">
                  {item.name}
                </a>

                {/* Underline on hover */}
                <span className="
                  absolute left-1/2 -bottom-1 w-0 h-[2px] bg-[#f18930]
                  transition-all duration-500 group-hover:w-[70px] group-hover:-translate-x-1/2
                "></span>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex-1 min-w-[250px] mb-10 text-center">
          <h3 className="text-2xl md:text-[28px] mb-5 font-semibold">Follow Us</h3>
          
          <ul className="flex justify-center gap-5">
            {[
              { icon: "fab fa-facebook", link: "https://facebook.com" },
              { icon: "fab fa-instagram", link: "https://instagram.com" },
              { icon: "fab fa-youtube", link: "https://youtube.com" },
              { icon: "fab fa-tiktok", link: "https://tiktok.com" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank">
                  <i className={`${item.icon} text-[25px] transition hover:text-[#f18930]`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-[#eae8e6] text-center py-4 mt-8">
        <p className="text-[#18191b] text-[15px] m-0">
          © 2025 Public Builders and Suppliers. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
