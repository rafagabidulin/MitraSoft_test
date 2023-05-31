import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Layout from './components/Layout/Layout';
import PostsPage from './pages/PostsPage/PostsPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export const App = () => (
  <div>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path='/' element={<PostsPage />} />
            <Route path='/about' element={<AboutMePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  </div>
);
