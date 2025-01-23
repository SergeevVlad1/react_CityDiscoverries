import { useState, useEffect } from "react";
import "./reviews.scss";
import { useParams } from "react-router-dom";

function Reviews({ postId }) {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const baseUrl = "https://6790a307af8442fd73770bf0.mockapi.io/attractions/";

  useEffect(() => {
    loadReviews();
  }, [postId]);

  async function loadReviews() {
    try {
      const resp = await fetch(`${baseUrl}${id}/comments/`);
      const data = await resp.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Ошибка при загрузке отзывов", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function addReview(event) {
    event.preventDefault();
    if (!name || !text || !rating)
      return alert("Пожалуйста, заполните все обязательные поля.");
    if (rating > 5) return alert("Максимальная оценка 5");
    setIsSubmitting(true);
    try {
      const response = await fetch(`${baseUrl}${id}/comments/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text, rating, postId }),
      });
      if (!response.ok) throw new Error("Ошибка при добавлении отзыва.");
      const newReview = await response.json();
      setReviews([...reviews, newReview]);
      setName("");
      setText("");
    } catch (error) {
      console.error("Ошибка при отправке отзыва:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function deleteReview(reviewId) {
    if (!window.confirm("Удалить отзыв?")) return;
    try {
      const response = await fetch(`${baseUrl}${id}/comments/${reviewId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setReviews(reviews.filter((review) => review.id !== reviewId));
      } else {
        alert("Ошибка при удалении отзыва: ");
      }
    } catch (error) {
      console.error("Ошибка при удалении отзыва:", error);
    }
  }

  return (
    <div className="Comments__container">
      <form className="comments__form" onSubmit={addReview}>
        <input
          className="comments__name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          required
        />
        <textarea
          className="comments__name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ваш отзыв"
          required
        />
        <input
          className="comments__name"
          type="input"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Ваша оценка"
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Добавление..." : "Добавить отзыв"}
        </button>
      </form>
      <div className="comment__block">
        {isLoading ? (
          <p>Загрузка отзывов...</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review">
              <p>
                <strong>Имя: {review.name}</strong>
              </p> 
              <p>Текст отзыва: {review.text}</p>
              <p>Ваша оценка: {review.rating}/5</p>
              <button onClick={() => deleteReview(review.id)}>Удалить</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;
