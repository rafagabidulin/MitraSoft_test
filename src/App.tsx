import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PostsPage from './pages/PostsPage/PostsPage';

export const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
