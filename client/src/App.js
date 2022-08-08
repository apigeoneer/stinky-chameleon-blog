import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import Resources from "./pages/resources/Resources";
import Write from "./pages/edit/Edit";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <TopBar/>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/articles" element={ <Home/> }></Route>
        <Route path="/resources" element={ <Resources/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        <Route path="/singlepost" element={ <Single/> }></Route>
        <Route path="/write" element={ <Write/> }></Route>
      </Routes>
    </>
  );
}

export default App;
