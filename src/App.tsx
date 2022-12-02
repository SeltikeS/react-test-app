import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/products-page";
import AboutPage from "./pages/about-page";
import {Navigation} from "./components/navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProductsPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
    </>
  );
}

export default App;
