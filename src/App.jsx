import { useState } from "react";
import Digital from "./components/Digital";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stat from "./components/Stat";
import { ToastContainer } from "react-toastify";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productPromise = getProducts();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart} />
      <Hero />
      <Stat />
      <Digital productPromise={productPromise} cart={cart} setCart={setCart} />

      <ToastContainer />
    </>
  );
}

export default App;
