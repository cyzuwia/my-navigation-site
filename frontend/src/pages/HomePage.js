import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import NewsWidget from '../components/NewsWidget';

const HomePage = () => {
    return (
        <div>
            <h1>欢迎来到导航网站</h1>
            <WeatherWidget />
            <NewsWidget />
        </div>
    );
};

export default HomePage;
