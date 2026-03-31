import "./App.css";
import AppStatus from "./components/AppStatus";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductCollection from "./components/ProductCollection";
import Transform from "./components/Transform";
import Footer from "./components/Footer";
import { useState } from "react";

const getAllData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const modelPromise = getAllData();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <Navbar />
      <Hero />
      <AppStatus />
      <ProductCollection
        modelPromise={modelPromise}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartData={cartData}
        setCartData={setCartData}
      />
      <GetStarted />
      <Pricing />
      <Transform />
      <Footer />
    </>
  );
}

export default App;
