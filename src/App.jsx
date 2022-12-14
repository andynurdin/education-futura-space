import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import OnlineLearn from "./pages/OnlineLearn";
import OfflineLearn from "./pages/OfflineLearn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import DetailKelasOnline from "./pages/DetailKelasOnline";
import DetailKelasOffline from "./pages/DetailKelasOffline";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onlineLearn" element={<OnlineLearn />} />
          <Route path="/offlineLearn" element={<OfflineLearn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kelasOnline" element={<DetailKelasOnline />} />
          <Route path="/kelasOffline" element={<DetailKelasOffline />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
