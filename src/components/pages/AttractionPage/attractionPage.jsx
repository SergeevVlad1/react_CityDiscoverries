import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import MySelect from '../../UI/select/MySelect';
import Loader from '../../UI/Loader/Loader'; // Предположим, что у вас есть компонент Loader

const src = 'https://67320e867aaf2a9aff134756.mockapi.io/api/1/places';

const AttractionPage = () => {
  const navigate = useNavigate();

  // Состояния для сортировки, фильтрации, пагинации и поиска
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('name');
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const fetchArticles = async ({ queryKey }) => {
    const [_, { page, sort, filter, search }] = queryKey;
    const response = await axios.get(src, {
      params: {
        page,
        limit: 4,
        sortBy: sort,
        filter,
        search,
      },
    });
    return response.data;
  };

  // Использование useQuery для получения данных
  const {
    data: articles,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['places', { page, sort, filter, search }], // Ключ запроса с параметрами
    queryFn: fetchArticles,
    keepPreviousData: true, // Плавный переход между страницами
    staleTime: 1000 * 60 * 5, // Кеширование данных на 5 минут
  });

  // Обработчики для изменения параметров
  const handleSortChange = (sort) => {
    setSelectedSort(sort);
    setSort(sort);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Loader />; // Используйте ваш компонент Loader
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Attractions:</h1>

      <hr style={{ margin: '15px 0' }} />

      <MySelect
        value={selectedSort}
        onChange={handleSortChange}
        defaultValue="Сортировка по:"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />

      <input
        type="text"
        placeholder="Фильтр"
        value={filter}
        onChange={handleFilterChange}
      />

      <input
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={handleSearchChange}
      />

      {/* Отображение данных */}
      {articles.map((article) => (
        <div key={article.id} className="post">
          <h2>{article.name}</h2>
          <img className="attraction_img" src={article.imageUrl} alt="Img" />
          <p>{article.description}</p>
          <button onClick={() => navigate(`/attraction/${article.id}`)}>
            Узнать больше
          </button>
        </div>
      ))}

      {/* Пагинация */}
      <div>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Назад
        </button>
        <span>Page: {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Вперед</button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AttractionPage;