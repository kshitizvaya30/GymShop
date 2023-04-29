import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Nav/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Classes from "./Pages/Classes";
import Price from "./Pages/Price";
import Blog from "./Pages/Blog";
import Schedule from "./Pages/Schedule/Schedule";
import Monday from "./Pages/Schedule/Monday";
import Tuesday from "./Pages/Schedule/Tuesday";
import Wednesday from "./Pages/Schedule/Wednesday";
import Thursday from "./Pages/Schedule/Thursday";
import Friday from "./Pages/Schedule/Friday";
import Saturday from "./Pages/Schedule/Saturday";
import Sunday from "./Pages/Schedule/Sunday";
import Gallery from "./Pages/Gallery/Gallery";
import GalleryPage1 from "./Pages/Gallery/GalleryPage1";
import GalleryPage2 from "./Pages/Gallery/GalleryPage2";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" Component={<Home />} />
            <Route path="contact" Component={<Contact />} />
            <Route path="login" Component={<Login />} />
            <Route path="signup" Component={<SignUp />} />
            <Route path="classes" Component={<Classes />} />
            <Route path="pricing" Component={<Price />} />
            <Route path="blog" Component={<Blog />} />
            <Route path="about" Component={<About />} />

            <Route path="schedule" Component={<Schedule />}>
              <Route path="monday" Component={<Monday />} />
              <Route path="tuesday" Component={<Tuesday />} />
              <Route path="wednesday" Component={<Wednesday />} />
              <Route path="thursday" Component={<Thursday />} />
              <Route path="friday" Component={<Friday />} />
              <Route path="saturday" Component={<Saturday />} />
              <Route path="sunday" Component={<Sunday />} />
            </Route>

            <Route path="gallery" Component={<Gallery />}>
              <Route path="page-1" Component={<GalleryPage1 />} />
              <Route path="page-2" Component={<GalleryPage2 />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
