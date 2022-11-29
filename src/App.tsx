// css imports
import './App.css';
import './css/form.css'
// components import (hooks, router, comps)
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Product } from './components/Product';
// redux imports
import { useDispatch, useSelector } from 'react-redux'
import { Store } from './model/model';
import reducer from './store/reducer';
import { setProducts } from './store/actions';
// pages imports
// import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { Home } from './components/Home';
import { productsSelector } from './store/selectors';
// import Spa from './components/Spa';
// import { Provider } from 'react-redux'
// import Store from './components/Store';




const App: React.FC = () => {
  const dispatch = useDispatch()
 


  useEffect(() => {
    fetch(`https://assets.fc-dev.instore.oakley.com/assets/products/products.json`)
      .then(response => response.json())
      .then(products => {

        dispatch(setProducts(products));
        console.log(products);
      }
        )
  }, [dispatch]);
  const products = useSelector(productsSelector);
  if (products === undefined) {
    return (
      <h1>
        Waiting for connection . . .
      </h1>
    )
  }


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:UPC" element={<ProductDetail/>}/>
        </Routes>
      </Router>
  )

}

export default App;