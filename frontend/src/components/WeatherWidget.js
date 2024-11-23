import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get('天气API的URL');
      setWeather(response.data);
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h3>当前天气</h3>
          <p>{weather.description}</p>
        </div>
      ) : (
        <p>加载中...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
