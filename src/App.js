import './App.scss';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </Router>
  );
}

export default App;
