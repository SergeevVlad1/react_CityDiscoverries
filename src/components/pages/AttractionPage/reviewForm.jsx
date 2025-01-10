import React from 'react';

const ReviewForm = () => {
  return (
    <div className="filter">
      <div id="reviews">{}</div>

      <form className="review__form" id="reviewForm">
        <h1 className="review__title">Ваши впечатления</h1>
        <label className="review__label" htmlFor="name">
          Имя:
        </label>
        <input className="review__input" type="text" id="name" name="name" required />
        <br />
        <label className="review__label" htmlFor="text">
          Текст отзыва:
        </label>
        <textarea className="review__input" id="text" name="text" required></textarea>
        <br />
        <button className="main__button" type="submit">
          Оставить отзыв
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;