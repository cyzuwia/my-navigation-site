import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsWidget = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('新闻API的URL');
      setNews(response.data.articles);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h3>最新新闻</h3>
      <ul>
        {news.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsWidget;
