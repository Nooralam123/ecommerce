
// import React,{ useState } from 'react';
// import './App.css';
// import Header from './components/Header/Header';

// import { BrowserRouter,Route ,Routes } from "react-router-dom";
// import Home from './components/Header/Home';
// import About from './components/Header/About';
// import Cart from './components/Cart/Cart';

// function App() {
 
 
//   return (
//     <>
   
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;
import './App.css';
import Header from './newComponents/Header';
import ProductList from './newComponents/ProductList';
import CartList from './newComponents/CartList';
import { useState } from 'react';
import Data from './newComponents/Data';
import { BrowserRouter,Route ,Routes } from "react-router-dom";
import Home from './newComponents/Home';
import About from './newComponents/About';
import Footer from './newComponents/Footer';

function App() {

     const [product,setProduct] = useState(Data)

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
       
      <Header count={cart.length}
        handleShow={handleShow} > 
        <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} /> 
        </Routes>
         </BrowserRouter>
        </Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }

     <Footer />
    </div>
  );
}

export default App;
