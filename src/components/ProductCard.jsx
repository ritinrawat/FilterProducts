import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl p-4 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col">
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md shadow-gray-200/50 border border-gray-100/50 transition-transform group-hover:scale-105">
        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">{product.category}</span>
      </div>

      <div className="relative aspect-square overflow-hidden rounded-2xl mb-5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 shadow-inner">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply drop-shadow-md group-hover:drop-shadow-xl"
        />
      </div>

      <div className="flex-1 flex flex-col px-2">
        <h2 className="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors drop-shadow-sm">{product.name}</h2>

        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1 font-semibold">Price</p>
            <p className="text-2xl font-black text-gray-900 tabular-nums drop-shadow-sm">₹{product.price}</p>
          </div>

          <button className="bg-white border border-gray-100 hover:bg-indigo-600 text-indigo-600 hover:text-white p-3.5 rounded-xl transition-all duration-300 flex items-center justify-center group/btn shadow-md shadow-indigo-500/5 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 hover:-translate-y-0.5">
            <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;