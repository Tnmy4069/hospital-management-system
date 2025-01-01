import { useEffect, useState } from "react";
import Logo from "../../assets/images/AarohiLogo.png";

const CustomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileDropdownVisible, setIsMobileDropdownVisible] = useState(false);
  let hideTimeout;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDropdown = () => {
    clearTimeout(hideTimeout);
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    hideTimeout = setTimeout(() => setIsDropdownVisible(false), 300);
  };

  return (
    <div className={`w-full z-50 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 bg-white shadow-md" : "relative"}`}>
      
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        <a href="#home" className="flex items-center">
          <img src={Logo} alt="Hospital Logo" className="h-14 w-14" />
        </a>

        <div className="hidden lg:flex lg:items-center lg:space-x-10">
          <a href="#home" className="text-green-600 hover:text-green-700 text-xl font-bold">Home</a>
          
          <div className="relative" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <button className="text-gray-700 hover:text-gray-900 text-xl font-bold inline-flex items-center">
              Services
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownVisible && (
              <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
                <ul className="py-2 text-sm text-gray-700">
                  {["Service 1", "Service 2", "Service 3"].map(service => (
                    <li key={service}>
                      <a href={`#${service.toLowerCase().replace(" ", "")}`} className="block px-4 py-2 hover:bg-gray-100">{service}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="#doctors" className="text-gray-700 hover:text-gray-900 text-xl font-bold">Doctors</a>
          <a href="#aboutus" className="text-gray-700 hover:text-gray-900 text-xl font-bold">About Us</a>
          <a href="#contactus" className="text-gray-700 hover:text-gray-900 text-xl font-bold">Contact Us</a>

          
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <button className="bg-green-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-green-700 text-lg md:text-xl">Sign in</button>
          <button className="border border-green-900 text-green-600 px-4 md:px-6 py-2 rounded-md hover:bg-green-700 text-lg md:text-xl">Sign up</button>
        </div>

        <button 
          className="block lg:hidden text-gray-800 focus:outline-none" 
          aria-label="Toggle Menu" 
          onClick={() => document.getElementById("menu").classList.toggle("hidden")}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className="hidden lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50" id="menu">
          <a href="#home" className="block px-4 py-2 text-gray-700">Home</a>
          
          <div className="block px-4 py-2 text-gray-700 relative">
            <button 
              onClick={() => setIsMobileDropdownVisible(!isMobileDropdownVisible)} 
              className="flex justify-between items-center w-full"
            >
              Services
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isMobileDropdownVisible && (
              <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full mt-2">
                <ul className="py-2 text-sm text-gray-700">
                  {["Service 1", "Service 2", "Service 3"].map(service => (
                    <li key={service}>
                      <a href={`#${service.toLowerCase().replace(" ", "")}`} className="block px-4 py-2 hover:bg-gray-100">{service}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {["Doctors", "About us", "Contact us"].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="block px-4 py-2 text-gray-700">{item}</a>
          ))}

          <div className="flex flex-col space-y-2 p-4">
            <button className="bg-green-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-green-700 text-lg md:text-xl">Sign in</button>
            <button className="border border-green-900 text-green-600 px-4 md:px-6 py-2 rounded-md hover:bg-green-700 text-lg md:text-xl">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
