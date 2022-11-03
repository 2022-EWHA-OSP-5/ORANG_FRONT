import './styles/reset.scss';
import './styles/font.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Test from './components/Test';
import DetailPage from './pages/Detail/DetailPage';
import DetailMenuPage from './pages/Detail/DetailMenuPage';
import DetailReviewPage from './pages/Detail/DetailReviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Test />} />
        <Route exact path="/detail" element={<DetailPage />} />
        <Route exact path="/detail/menu" element={<DetailMenuPage />} />
        <Route exact path="/detail/review" element={<DetailReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
