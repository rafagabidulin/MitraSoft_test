import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import PostsPage from './pages/PostsPage/PostsPage';

export const App = () => (
  <div>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<PostsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </div>
);
