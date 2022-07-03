import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Comment from './Pages/Comment';
import Analytics from './Pages/Analytics';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';


function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>

    </>
  );
}

export default App;
