import "./App.css";
import AppStatus from "./components/AppStatus";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCollection from "./components/ProductCollection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppStatus />
      <ProductCollection />
    </>
  );
}

export default App;
