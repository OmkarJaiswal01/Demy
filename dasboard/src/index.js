import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Category from './Dasboard/Category';
import Dashboard from './Dasboard/Dashboard';
import SubCategory from './Dasboard/SubCategory';
import Product from './Dasboard/Product';
import Home from './Home';
import Login from './Login';

import About from './About';
import Contact from './Contact';
import Register from './Register';
import { SideNavSubCat } from './Componemts';
import SubcatComponent from './SubcatComponent';
import { Provider } from 'react-redux';
import { Store } from './Redux/ReduxStore';
import UserLogin from './UserLogin';
import CartViewPage from './Cart/CartViewPage';
import MyOrder from './MyOrder';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
      <Routes>
      <Route exact path='/Dasboard' element={<Dashboard/>} ></Route>
      <Route exact path='/Category' element={<Category/>} ></Route>
      <Route exact path='/SubCategory' element={<SubCategory/>} ></Route>
      <Route exact path='/Product' element={<Product/>} ></Route>
      <Route exact path='/' element={<Home/>} ></Route>
      <Route exact path='/Login' element={<Login/>} ></Route>
      <Route exact path='/About' element={<About/>} ></Route>
      <Route exact path='/Contact' element={<Contact/>} ></Route>
      <Route exact path='/Login' element={<Login/>} ></Route>
      <Route exact path='/UserLogin' element={<UserLogin/>} ></Route>
      <Route exact path='/Register' element={<Register/>} ></Route>
      <Route exact path='/CartViewPage' element={<CartViewPage/>} ></Route>
      <Route exact path='/MyOrder' element={<MyOrder/>} ></Route>
      <Route exact path='/subcat/:id' element={<Provider store={Store}><SubcatComponent/></Provider>} ></Route>
      
      
      
     
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
