import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Githubstars = lazy(() => import("./Githubstars"));
const Finder = lazy(() => import("./Finder"));
const Repo = lazy(() => import("./Repo"));

function AllRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finder" element={<Finder />} />
        <Route path="/githubstars" element={<Githubstars />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/repo" element={<Repo />} /> */}
      </Routes>
    </Suspense>
  );
}

export default AllRoutes;
