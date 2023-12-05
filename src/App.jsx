import "./app.css";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallex from "./components/Parallex";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

const App = () => {
  return (
    <div className=" ">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallex type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
