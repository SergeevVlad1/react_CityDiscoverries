import React from "react";
import "./about.scss";

const AboutPage = () => {
  const openModal = () => {
    // Логика открытия модального окна
    const modal = document.getElementById("myModal");
    if (modal) modal.style.display = "block";
  };

  const closeModal = () => {
    // Логика закрытия модального окна
    const modal = document.getElementById("myModal");
    if (modal) modal.style.display = "none";
  };

  return (
    <>
      <section className="main">
        <div className="wrapper">
          <div className="main__map">
            <iframe
              className="xz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415264.3601562437!2d139.55951292915526!3d35.596829862495575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z0KLQvtC60LjQviwg0K_Qv9C-0L3QuNGP!5e0!3m2!1sru!2sru!4v1728894705989!5m2!1sru!2sru"
              width="1320"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about__title-box">
            <h1>Немного о нас:</h1>
            <h2>
              <font size="4">Наша</font> команда состоит из профессионалов в
              области туризма, журналистики и местных жителей, которые знают
              город как свои пять пальцев. Мы постоянно исследуем новые места и
              обновляем информацию, чтобы вы всегда получали самые свежие и
              актуальные данные. <br /> <font size="4">Наша</font> команда
              состоит из профессионалов в области туризма, журналистики и
              местных жителей, которые знают город как свои пять пальцев. Мы
              постоянно исследуем новые места и обновляем информацию, чтобы вы
              всегда получали самые свежие и актуальные данные.
            </h2>
          </div>

          <div className="about__contact-text-box">
            <h1>Контакты</h1>

            <div className="about__img-txt">
              <div className="about__img-txt1">
                <img
                  src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000"
                  alt="Phone"
                  className="about__img1"
                />
                <a href="#" className="ab">
                  +7(9)777-77-77
                </a>
              </div>

              <div className="about__img-txt1">
                <img
                  src="https://img.icons8.com/?size=100&id=53435&format=png&color=000000"
                  alt="Email"
                  className="about__img2"
                />
                <a href="#" className="ab">
                  svv.kaz@mail.ru
                </a>
              </div>

              <div className="about__img-txt1">
                <img
                  src="https://img.icons8.com/?size=100&id=F4ZPUh2Mk5tk&format=png&color=000000"
                  alt="Telegram"
                  className="about__img3"
                />
                <a href="#" className="ab">
                  @Volody_a
                </a>
              </div>

              <div className="about__img-txt1">
                <img
                  src="https://img.icons8.com/?size=100&id=99262&format=png&color=000000"
                  alt="VKontakte"
                  className="about__img4"
                />
                <a href="#" className="ab">
                  id:653067750
                </a>
              </div>
            </div>
          </div>

          <div className="about__qst-box">
            <h1 className="about__title">Ответы на популярные вопросы</h1>
            <div className="about__all-texts">
              <div className="about__text-1">
                <h1>Как найти жилье по доступной цене?</h1>
                <p>
                  Чтобы найти жилье по доступной цене, бронируйте заранее,
                  используйте поисковые системы для сравнения цен, выбирайте
                  недорогие отели или хостелы, рассматривайте варианты
                  проживания в пригороде или вдали от центра города.
                </p>
              </div>

              <div className="about__text-1">
                <h1>Какая валюта используется в Японии?</h1>
                <p>Иена (JPY)</p>
              </div>

              <div className="about__text-1">
                <h1>Где обменять валюту?</h1>
                <p>
                  Валюту можно обменять в банках, обменных пунктах, в аэропортах
                  или в отелях.
                </p>
              </div>

              <div className="about__text-1">
                <h1>Какие меры предосторожности нужно соблюдать?</h1>
                <p>
                  Будьте осторожны с деньгами, документами, не носите с собой
                  крупные суммы наличных, храните документы в безопасном месте.
                </p>
              </div>
            </div>
          </div>

          <button className="open-modal-btn" onClick={openModal}>
            Связаться с нами
          </button>

          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="modal__input-title1">
                <input
                  type="text"
                  size="40"
                  className="modal__input_title"
                  placeholder="Ваше имя"
                />
                <input
                  type="email"
                  size="40"
                  className="modal__input_title"
                  placeholder="Ваша почта"
                />
                <input
                  type="text"
                  size="40"
                  className="modal__input_title1"
                  placeholder="Сообщение"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
