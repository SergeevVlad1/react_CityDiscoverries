import React from "react";

const FilterSelect = () => {
  return (
    <select
      className="attraction__select"
      value={filter}
      onChange={handleFilterChange}
    >
      <option value="">---</option>
      <option value="category1">Музеи и Храмы</option>
      <option value="category2">Парки</option>
      <option value="category3">Популярные Достопримечательности</option>
    </select>
  );
};

export default FilterSelect;
