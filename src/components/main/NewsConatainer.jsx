import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import News from "./News";

const NewsContainer = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const apiUrl = import.meta.env.VITE_NEWS_API_URL;

        if (!apiKey || !apiUrl) {
          throw new Error("API 키 또는 URL이 설정되지 않았습니다.");
        }

        const selectedCategory = category?.toLowerCase();
        const queryParam =
          selectedCategory && selectedCategory !== "all"
            ? `&category=${selectedCategory}`
            : "";

        const response = await fetch(
          `${apiUrl}?country=us${queryParam}&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return (
      <div className="p-12 text-center">
        <p className="text-4xl font-bold dark:text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500 dark:text-red-400">
        <p>News Loading Error: {error.message}</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        <p>표시할 뉴스가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid gap-6">
      {articles.map((article) => (
        <News key={article.url || Math.random()} article={article} />
      ))}
    </div>
  );
};

export default NewsContainer;
