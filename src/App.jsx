import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogSingle from "./pages/BlogSingle";
import Page404 from "./pages/Page404";
import Faq from "./pages/Faq";
import Shop from "./pages/Shop";
import ProductSingle from "./pages/ProductSingle";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Downloads from "./pages/Downloads";
import Address from "./pages/Address";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<About />} exact path="/about" />
        <Route element={<Blogs />} exact path="/blog" />
        <Route element={<BlogSingle />} exact path="/blogSingle" />
        <Route element={<Page404 />} exact path="/404" />
        <Route element={<Faq />} exact path="/faq" />
        <Route element={<Shop />} exact path="/shop" />
        <Route element={<ProductSingle />} exact path="/productDetails" />
        <Route element={<Checkout />} exact path="/checkout" />
        <Route element={<Cart />} exact path="/cart" />
        <Route element={<Confirmation />} exact path="/confirmation" />
        <Route element={<Contact />} exact path="/contact" />
        <Route element={<Dashboard />} exact path="/dashboard" />
        <Route element={<Orders />} exact path="/orders" />
        <Route element={<Downloads />} exact path="/downloads" />
        <Route element={<Address />} exact path="/address" />
        <Route element={<Account />} exact path="/account" />
        <Route element={<Login />} exact path="/login" />
        <Route element={<Signup />} exact path="/signUp" />
        <Route element={<ForgotPassword />} exact path="/forgotPassword" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
