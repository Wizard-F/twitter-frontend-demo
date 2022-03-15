import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';

import App from './App';
import TweetList from './components/TweetList';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TweetList />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="logout" element={<Logout />} />
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
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById('root')
);

