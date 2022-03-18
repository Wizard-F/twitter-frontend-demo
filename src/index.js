import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import TweetList from './components/TweetList';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import AboutInfo from './components/AboutInfo';
import Tweet from './components/Tweet';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TweetList />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="logout" element={<Logout />} />
        <Route path='about' element={<AboutInfo />} />
        <Route path='tweets/:tweetId' element={<Tweet />} />
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

