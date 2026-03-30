import "./App.css";
import AppStatus from "./components/AppStatus";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductCollection from "./components/ProductCollection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppStatus />
      <ProductCollection />
      <GetStarted />
      <Pricing />
    </>
  );
}

export default App;
