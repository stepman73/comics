import React, { lazy, Suspense } from "react";

import useWindowSize from "../../hooks/useWindowSize";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));

const MainPage = lazy(() => import("../pages/MainPage"));

const ComicsPage = lazy(() => import("../pages/ComicsPage"));

const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));

function App() {
  const { width } = useWindowSize();

  return (
    <div>
      <>
        <Router>
          <div className="app">
            <AppHeader />

            <main>
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path="/" element={<MainPage />} />

                  <Route path="/comics" element={<ComicsPage />} />

                  <Route
                    path="/comics/:comicId"
                    element={<SingleComicPage />}
                  />

                  <Route path="*" element={<Page404 />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
