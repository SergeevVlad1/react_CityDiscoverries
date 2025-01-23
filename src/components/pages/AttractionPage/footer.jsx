import React from "react";
import blackLogo from "./AttractionPage/header/black.logo.png";
import logoSpotify from "./AttractionPage/footer/logo.spotify.png";
import logoInst from "./AttractionPage/footer/logo.inst.png";
import logoDs from "./AttractionPage/footer/logo.ds.png";
import "./css/footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__box">
        <ul className="footer__contacts">
          <img src={blackLogo} alt="logo" />
        </ul>
        <a className="cancelBtn" id="cancelBtn"></a>
        <div className="cc">
          <a href="#" className="footer__logo">
            <img src={logoSpotify} alt="Spotify" className="footer__img" />
            <img src={logoInst} alt="Instagram" className="footer__img1" />
            <img src={logoDs} alt="Discord" className="footer__img2" />
          </a>
        </div>
      </div>

      <div className="footer__text">
        <h1>
          © 2024 CityDiscoveries. All Rights Reserved. Design by @Vol0dy_a
        </h1>
      </div>
    </section>
  );
};

export default Footer;
