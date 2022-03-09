import "./App.css";
import "./Responsive.css";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "./components/Topnav";
import MiddleMenu from "./components/MiddleMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main_demo">
    <BrowserRouter>
    <Topnav />
      <MiddleMenu />
      <Menu />             
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
