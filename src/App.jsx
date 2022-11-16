import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Login from "./pages/Login";
import OnlineLearn from "./pages/OnlineLearn";
import OfflineLearn from "./pages/OfflineLearn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navs from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navs />
      <img src="images/header.png" alt="" style={{width:"100%"}}/>
      <Container>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onlineLearn" element={<OnlineLearn />} />
            <Route path="/offlineLearn" element={<OfflineLearn />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
