import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import NotFoundPage from "../NotFoundPage/notFoundPage";
import Reviews from "../../UI/Reviews/reviews";
import "./attractionPageId.scss";
import AttractionPage from "../AttractionPage/attractionPage";
import Loader from "../../UI/Loader/Loader";

const AttractionPageId = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, [params.id]);

  const nextImage = () => {
    if (post && post.imageUrls && post.imageUrls.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === post.imageUrls.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  const prevImage = () => {
    if (post && post.imageUrls && post.imageUrls.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? post.imageUrls.length - 1 : prevIndex - 1,
      );
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error || !post) {
    return <NotFoundPage />;
  }

  return (
    <div className="attraction-page">
      <h2>Вы открыли страницу поста с ID = {params.id}</h2>
      <div className="block_attraction">
        <div className="slider">
          <button className="slider-button prev" onClick={prevImage}>
            &lt;
          </button>
          <img
            className="slider-image"
            src={
              post.imageUrls ? post.imageUrls[currentImageIndex] : post.imageUrl
            }
            alt="Attraction"
          />

          <button className="slider-button next" onClick={nextImage}>
            &gt;
          </button>
        </div>

        <div className="text__content">
          <h2>{post.name}</h2>
          <h3>{post.description}</h3>
        </div>
      </div>

      <Reviews postId={params.id} />
    </div>
  );
};

export default AttractionPageId;
