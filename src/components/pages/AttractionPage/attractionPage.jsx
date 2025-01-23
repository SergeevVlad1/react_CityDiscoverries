import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import Footer from "./footer";
import MySelect from "../../UI/select/SortSelect";
import Loader from "../../UI/Loader/Loader";
import "./css/attraction.scss";

const src = "https://6790a307af8442fd73770bf0.mockapi.io/attractions";

const AttractionPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [sort, setSort] = useState("name");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  // {_}
  const fetchArticles = async ({ queryKey }) => {
    const [page, sort, filter, search, limit] = queryKey;
    const response = await axios.get(src, {
      params: {
        page,
        limit,
        sortBy: sort,
        filter,
        search,
      },
    });
    return response.data;
  };

  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [page, sort, filter, search, limit],
    queryFn: fetchArticles,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (!isLoading && articles.length === 0) {
      setSearch("");
      setSort("name");
      setPage(1);
      alert("Ничего не найдено");
    }
  }, [articles, isLoading]);

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
    setSort(sort);
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
  };

  const handleTempSearchChange = (event) => {
    setTempSearch(event.target.value);
  };

  const handleSearchClick = () => {
    setSearch(tempSearch);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const paginationMore = (event) => {
    if (limit < 12) {
      setLimit((limit) => limit + 6);
      setPage(1);
    } else {
      alert("Вы на последней странице");
    }
  };

  return (
    <div className=" container">
      <h1>Attractions:</h1>

      <div className="attraction">
        <MySelect
          className="attraction__select"
          value={selectedSort}
          onChange={handleSortChange}
          defaultValue="Сортировка по:"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />

        <select
          className="attraction__select"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">---</option>
          <option value="category1">Музеи и Храмы</option>
          <option value="category2">Парки</option>
          <option value="category3">Популярные Достопримечательности</option>
        </select>

        <div>
          <input
            className="attraction__select"
            type="text"
            placeholder="Поиск"
            value={tempSearch}
            onChange={handleTempSearchChange}
          />
        </div>
      </div>

      <button onClick={handleSearchClick}>Найти</button>
      <div className="attraction__posts">
        {articles.map((article) => (
          <div key={article.id} className="post">
            <h2>{article.name}</h2>
            <img
              onClick={() => navigate(`/attraction/${article.id}`)}
              className="post__ImageUrl"
              src={article.imageUrl}
              alt="Img"
            />
            <button onClick={() => navigate(`/attraction/${article.id}`)}>
              Узнать больше
            </button>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          ⇦ Назад
        </button>
        <span>Page: {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Вперед ⇨</button>
      </div>
      <div>
        <button className="morePagination" onClick={() => paginationMore()}>
          Загрузить еще
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default AttractionPage;
