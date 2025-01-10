import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const src = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';

const AttractionPage = () => {

  const { data: articles, isLoading, isError, error } = useQuery({
    queryKey: ['places'], // Ключ запроса
    queryFn: async () => {
      const response = await axios.get(src);
      console.log(response.data); // Проверка данных
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Attractions:</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.name}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AttractionPage;