import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Preloader from "./components/Preloader";
import Nav from "./sections/Nav";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Sustainability from "./sections/Sustainability";
import Team from "./sections/Team";
import Work from "./sections/Work";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading delay of 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: "10%", scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="relative"
    >
      <header className="p-5">
        <Nav />
      </header>
      <section className="p-5">
        <Hero />
      </section>
      <section className="p-5">
        <Mission />
      </section>
      <section className="p-5">
        <Services />
      </section>
      <section className="p-5">
        <Work />
      </section>
      <section className="p-5">
        <Sustainability />
      </section>
      <section className="p-5">
        <Team />
      </section>
      <section className="p-5">
        <Contact />
      </section>
      <section className="p-5">
        <Footer />
      </section>
    </motion.main>
  );
};

export default App;
