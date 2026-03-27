import React from 'react'

const SearchBar = ({ setSearch }) => {
  return (
    <div className="relative w-full max-w-xl group transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
        <svg className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Discover amazing products..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-4 md:py-5 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/15 focus:border-indigo-400 text-gray-900 placeholder-gray-400 font-medium shadow-lg shadow-gray-200/50 group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-focus-within:shadow-xl group-focus-within:shadow-indigo-500/20 transition-all duration-300 text-lg relative"
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none z-10">
        <div className="px-2.5 py-1.5 bg-gray-50 border border-gray-200 shadow-sm rounded-lg text-xs font-bold text-gray-400 group-focus-within:border-indigo-200 group-focus-within:text-indigo-400 transition-colors">/</div>
      </div>
    </div>
  );
};

export default SearchBar;