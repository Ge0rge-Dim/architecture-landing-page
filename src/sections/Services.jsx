import Accordion from "../components/Accordion";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-container mt-28"
      id="services"
    >
      {" "}
      <h2 className="text-6xl max-md:text-5xl font-poppins text-secondary-dark-600">
        WHAT WE OFFER
      </h2>
      <div className="mt-20">
        <Accordion
          number="01"
          title="ARCHITECTURE"
          answer="We create innovative and sustainable building designs that balance functionality, aesthetics, and environmental responsibility."
        />
        <Accordion
          number="02"
          title="LANDSCAPE ARCHITECTURE"
          answer="Our team designs outdoor spaces that enhance the natural environment, creating harmonious and functional landscapes."
        />
        <Accordion
          number="03"
          title="URBAN DESIGN"
          answer="We develop comprehensive urban plans that promote livable, vibrant, and sustainable communities."
        />
        <Accordion
          number="04"
          title="INTERIOR DESIGN"
          answer="Our interior design services focus on creating spaces that are both beautiful and practical, tailored to your specific needs."
        />
        <Accordion
          number="05"
          title="DESIGN MANAGEMENT"
          answer="We oversee the entire design process, ensuring that projects are completed on time, within budget, and to the highest standards."
        />
      </div>
    </motion.section>
  );
};

export default Services;
