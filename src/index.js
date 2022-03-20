import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import TweetList from './components/TweetList';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import AboutInfo from './components/AboutInfo';
import Tweet from './components/Tweet';
import NewTweet from './components/NewTweet';
import RegisterForm from "./components/RegisterForm"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TweetList />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="logout" element={<Logout />} />
        <Route path='about' element={<AboutInfo />} />
        <Route path='tweets'>
          <Route index element={<Navigate to='/' />} />
          <Route path=':tweetId' element={<Tweet />} />
          <Route path='new' element={<NewTweet />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

