import React from 'react';
import preloaderGif from './AttractionPage/preloader/728.gif';    

const Preloader = () => {
  return (
    <section className="load">
      <div className="demoPreloader" id="demoPreloader">
        <img src={preloaderGif} alt="preloader" />
      </div>
    </section>
  );
};

export default Preloader;