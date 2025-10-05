import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Registration from "./pages/Registrestion.jsx"
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./pages/Login.jsx";
import Nav from "./component/nav.jsx";
import { userDataContext } from "./context/userContext.jsx";
import About from "./pages/About.jsx";
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx"

function App() {
  let { userData } = useContext(userDataContext);
  let location = useLocation();
  return (
    <>
      {" "}
      {userData && <Nav />}
      <Routes>
        <Route path="/" element={userData?<Home/>:<Navigate to="/login" state={{from:location.pathname}}/> } />
        
        <Route
          path="/login"
          element={
            userData ? <Navigate to={location.state?.from || "/"} /> : <Login />
          }
        />
        <Route
          path="/signup"
          element={
            userData ? <Navigate to={location.state?.from || "/"} /> : <Registration />
          }
        />
        <Route path="/about" element={userData?<About/>:<Navigate to="/login" state={{from:location.pathname}}/> } />
        <Route path="/collection" element={userData?<Collection/>:<Navigate to="/login" state={{from:location.pathname}}/> } />
        <Route path="/contact" element={userData?<Contact/>:<Navigate to="/login" state={{from:location.pathname}}/> } />
        <Route path="/product" element={userData?<Product/>:<Navigate to="/login" state={{from:location.pathname}}/> } />
        <Route path="/productdetail/:productId" element={userData?<ProductDetail/>:<Navigate to="/login" state={{from:location.pathname}}/> } />
      
      </Routes>
    </>
  );
}

export default App;
