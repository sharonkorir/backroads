import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Tours from "./components/Tours";

function App() {
  console.log("hello");
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
