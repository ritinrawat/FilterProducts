import React from 'react'

const Sort = ({ setSortOrder }) => {
  return (
    <select
      onChange={(e) => setSortOrder(e.target.value)}
      className="p-2 border rounded-lg mb-4 ml-2"
    >
      <option value="">Sort By</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
    </select>
  );
};

export default Sort;