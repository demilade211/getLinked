import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
