import { useState } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import productsData from "../data/productdata";
import Navbar from "../components/Navbar";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = productsData.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? item.category === category : true)
    );
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <Navbar setSearch={setSearch} />

      {/* Hero Section */}


      <div className="max-w-7xl h-screen mx-auto px-4 sm:px-6 pb-24">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 mt-6 pb-6 border-b border-gray-200/60 gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">Featured collection</h2>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold">
              {filteredProducts.length} items
            </span>
          </div>
          <Filter setCategory={setCategory} />
        </div>

        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">We couldn't find anything matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;