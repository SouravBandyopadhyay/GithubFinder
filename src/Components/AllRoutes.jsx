import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Githubstars from "./Githubstars";
import Finder from "./Finder";
import Repo from "./Repo";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finder" element={<Finder />} />
      <Route path="/githubstars" element={<Githubstars />} />
      <Route path="/about" element={<About />} />
      <Route path="/repo" element={<Repo />} />
    </Routes>
  );
}
export default AllRoutes;
