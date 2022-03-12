import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';

import App from './App';
import TweetList from './components/TweetList';

// const [cookies, setCookie, removeCookie] = useCookies();
// const authToken = cookies.authToken;
// let isValid = false;
// axios

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={<TweetList />}
          />
        
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

