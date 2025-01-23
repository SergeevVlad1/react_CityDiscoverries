import React from "react";
import "./main.scss";

const App = () => {
  return (
    <div>
      <header className="header">
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
      </header>

      <main id="mainPage"></main>

      <section className="visit">
        <div className="visit__title">
          <h3>Места которые вы можете посетить:</h3>
        </div>
        <div className="visit__section">
          <ul className="visit__box1">
            <div className="visit__mini-container">
              <div className="visit__text-box">
                <div className="visit__title1">
                  <h2>Храм Сенсодзи (浅草寺):</h2>
                </div>
                <div className="visit__text">
                  <h1>
                    Храм Сенсодзи (浅草寺): Самый старый храм в Токио,
                    построенный в 645 году. Помимо красочных ворот Каминаримон,
                    посетители могут пройти по оживленной улице Накамисе-дори,
                    полной сувенирных лавок и ресторанов, и насладиться тишиной
                    храмового комплекса.
                  </h1>
                </div>
                <a href="#" className="visit__btn">
                  Узнать больше
                </a>
              </div>
            </div>
          </ul>
          <ul className="visit__box1">
            <div className="visit__mini-container1">
              <div className="visit__text-box2">
                <div className="visit__title1">
                  <h2>Рынок Цукидзи (筑地市场):</h2>
                </div>
                <div className="visit__text">
                  <h1>
                    Рынок Цукидзи - это огромный оптовый рынок морепродуктов,
                    расположенный в Токио. Известен своей энергичной атмосферой,
                    свежайшими морепродуктами и знаменитым аукционом тунца.
                    Туристы могут посетить рынок, чтобы полюбоваться на аукцион.
                  </h1>
                </div>
                <a href="index.html?page=catalog&id=5" className="visit__btn1">
                  Узнать больше
                </a>
              </div>
              <div className="visit_img1"></div>
            </div>
          </ul>
          <ul className="visit__box1">
            <div className="visit__mini-container2">
              <div className="visit__text-box1">
                <div className="visit__title">
                  <h2>Токийская башня (东京塔 ):</h2>
                </div>
                <div className="visit__text">
                  <h1>
                    Самое высокое сооружение в Японии, с которого открывается
                    захватывающий панорамный вид на Токио. Посетители могут
                    полюбоваться видом с смотровых площадок на высоте 350 и 450
                    метров. Известна своей архитектурой, панорамным видом на
                    город.
                  </h1>
                </div>
                <a href="index.html?page=catalog&id=6" className="visit__btn">
                  Узнать больше
                </a>
              </div>
            </div>
          </ul>
        </div>
      </section>

      <div style={{ display: "none" }} className="slider-controls">
        <button className="prev-btn">Предыдущий</button>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <button className="next-btn">Следующий</button>
      </div>

      <section className="map">
        <div className="map__title">
          <h1>Карта Токио</h1>
        </div>
        <div className="map__map">
          <iframe
            className="map__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415264.3601562437!2d139.55951292915526!3d35.596829862495575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z0KLQvtC60LjQviwg0K_Qv9C-0L3QuNGP!5e0!3m2!1sru!2sru!4v1728894705989!5m2!1sru!2sru"
            width="1180"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__box">
          <ul className="footer__contacts">
            <h1 style={{ display: "none" }}>Контакты:</h1>
            <div className="aa">
              <a
                className="footer__btn"
                href="http://127.0.0.1:5500/index.html?page=contacts"
              >
                Подробная информация
              </a>
            </div>
            <li className="footer__contact">
              <img
                src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000"
                alt="img"
                className="footer__icon"
              />
              <h2>8 (906) 076-543-64-61</h2>
            </li>
            <li className="footer__contact">
              <img
                src="https://img.icons8.com/?size=100&id=T2ayUZTaZOJL&format=png&color=000000"
                alt="img"
                className="footer__icon"
              />
              <a href="https://vk.com/@id653067750" className="vk_link">
                id653067750
              </a>
            </li>
            <li className="footer__contact">
              <img
                src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=000000"
                alt="img"
                className="footer__icon"
              />
              <a className="footer__tg" href="https://t.me/Vol0dy_a">
                Vol0dy_a
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
