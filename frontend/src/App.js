import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import BookmarkPage from './pages/BookmarkPage';
import SettingsPage from './pages/SettingsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/bookmarks" component={BookmarkPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/disclaimer" component={DisclaimerPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
