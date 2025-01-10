import React from "react";
// import logo from './assets/img/logo.svg';

const MainPage = () => {
    return ( 
        
        <>
         <header className="header">
      <div className="header__logo">
        <a href="/" className="heder__logo">
          <img src alt="logo" />
        </a>
      </div>
      <div className="container">
        <div className="header__menu menu">
          <div className="menu__icon">
            <span></span>
          </div>
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a id="contactBtn" className="menu__link" href="#">
                  Контакты
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="?page=catalog">
                  Достопримечательности
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__texts">
          <div className="header__title">
            <h1>Токио</h1>
          </div>
          <div className="header__text">
            <h2>
              Ваш ключ к <br /> незабываемым <br /> приключениям.
            </h2>
          </div>
        </div>
      </div>
    </header>
</>
     );
}
 
export default MainPage;