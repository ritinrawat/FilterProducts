import { useState } from "react";

const Navbar = ({ setSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    if (setSearch) setSearch(value);
  };

  return (
    <nav className=" w-full backdrop-blur-md bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-100 shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-200">
            <span className="text-white font-bold text-xl leading-none">S</span>
          </div>
          <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight">
            ShopEasy
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold bg-gray-900 px-5 py-3 rounded-md text-white  transition-colors">
            Login
          </button>

          <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-medium">Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;