import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from 'components/NavBar/NavBar';
import NotFound from 'containers/NotFound';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('containers/Home'));
const Product = lazy(() => import('containers/Product'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" exact={true} element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
