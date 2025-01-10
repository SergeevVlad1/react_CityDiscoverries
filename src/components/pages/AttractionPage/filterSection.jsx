import React from 'react';

const FilterSection = () => {
    return ( 
        <section className="filter">
      <div className="filter__container">
        <div className="filter__main">
          <div className="filter__nav-content" id="filter__cont">
            <select id="mySelect" className="filter-select">
              <option id="all" value="all">
                Все категории
              </option>
              <option id="Bla" value="category1">
                Парки
              </option>
              <option value="category2">Категория 2</option>
              <option value="category3">Категория 3</option>
            </select>
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default FilterSection;