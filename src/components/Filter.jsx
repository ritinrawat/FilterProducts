import React from 'react'

const Filter = ({ setCategory }) => {
  const categories = ["All", "Electronics", "Fashion", "Home", "Audio", "Wearables"];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Category</span>
      <div className="relative group">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none w-full sm:w-48 pl-5 pr-10 py-3.5 bg-white border border-gray-100 rounded-xl outline-none focus:ring-4 focus:ring-indigo-500/15 focus:border-indigo-400 text-gray-700 font-medium cursor-pointer transition-all duration-300 hover:bg-gray-50 shadow-md shadow-gray-200/50 group-hover:shadow-lg group-hover:shadow-indigo-500/10 group-focus-within:shadow-lg group-focus-within:shadow-indigo-500/15 group-hover:-translate-y-0.5"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat === "All" ? "" : cat}>{cat}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none transition-transform group-hover:translate-y-0.5">
          <svg className="w-4 h-4 text-gray-400 group-focus-within:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;