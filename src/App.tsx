import React from 'react';
import styles from './app.module.scss';
import AboutPage from './pages/about/AboutPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CreatePage from './pages/create/CreatePage';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route index element={<AboutPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="*" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
