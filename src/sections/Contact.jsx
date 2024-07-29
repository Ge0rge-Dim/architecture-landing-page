import PrimaryButton from "../components/PrimaryButton";
import arrowUp from "../assets/icons/arrow-up.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-container mt-28"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-poppins text-6xl uppercase text-secondary-dark-600 max-md:text-3xl text-center">
          Have a project in mind? <br />
          We'd love to hear from you!
        </h2>
        <PrimaryButton label="Contact Us" iconURL={arrowUp} />
      </div>
    </motion.section>
  );
};

export default Contact;
