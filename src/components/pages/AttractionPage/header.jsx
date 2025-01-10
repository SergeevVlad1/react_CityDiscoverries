import React from "react";
import blackLogo from './AttractionPage/header/black.logo.png';
import catalogLupa from './AttractionPage/header/catalog.lupa.png';

const Header = () => {
    return ( 
        <header className="header">
      <div className="header__logo">
        <a href="./index.html">
          <img src={blackLogo} alt="logo" />
        </a>
      </div>

      <div className="container">
        <div className="header__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="header__menu-body">
          <ul id="itemList" className="header__menu-list">
            <li className="header__menu-link">
              <a href="./index.html">На главную</a>
            </li>
            <li className="header__menu-link">
              <a href="./index.html?page=contacts">Контакты</a>
            </li>
            <li id="ImgSearch" className="header__menu-link1">
              <a href="#">
                <img src={catalogLupa} alt="search" />
              </a>
            </li>
            <li className="header__menu-link">
              <input
                className="review__input_search"
                type="text"
                id="searchInput"
                placeholder="Поиск достопримечательностей..."
              />
            </li>
            <li className="category_label">
              <div className="filter">
                <label htmlFor="category">Категория:</label>
                <select className="review__label" id="category">
                  <option value="">Все</option>
                  <option value="category1">Храмы и музеи</option>
                  <option value="category2">Парки</option>
                  <option value="category3">Другое</option>
                </select>
                <label htmlFor="sortBy">Сортировать по:</label>
                <select className="review__label" id="sortBySelect">
                  <option value="">-- Выберите критерий --</option>
                  <option value="popularity_asc">Популярность (возрастание)</option>
                  <option value="popularity_desc">Популярность (убывание)</option>
                  <option value="name_asc">Имя (А-Я)</option>
                  <option value="name_desc">Имя (Я-А)</option>
                </select>
                <button className="main__button" id="modalOpen">
                  Открыть общую галерею
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <nav className="menu__body">
          <li className="header__menu-link2">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  уауауа
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  акак
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  как
                </a>
              </li>
            </ul>
          </li>
        </nav>
      </div>
    </header>

     );
}
 
export default Header;