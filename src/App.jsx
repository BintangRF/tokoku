import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/products/ProductDetail";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import About from "./components/about/About";

function App() {
  return (
    <div className="bg-[#F4F6FF] min-h-screen overflow-hidden">
      <Router>
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
