import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import "./Assets/sass/pages/main.scss"

const Home = lazy(() => import('./Screens/Home'));
const Store = lazy(() => import('./Screens/Store'));
const Categories = lazy(() => import('./Screens/Categories'));
const Category = lazy(() => import('./Screens/Category'));
const Adddata = lazy(() => import('./Screens/Adddata'));
const Addstore = lazy(() => import('./Screens/Addstore'));

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbar />
        <Suspense fallback={<div className='inldr'><img src='./images/loader.gif'/></div>}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/admin" exact element={<Adddata/>} />
            <Route path="/admin/store" exact element={<Addstore/>} />
            <Route path="/:stname" exact element={<Store/>} />
            <Route path="/categories" exact element={<Categories/>} />
            <Route path="/categories/:name" exact element={<Category/>} />
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
