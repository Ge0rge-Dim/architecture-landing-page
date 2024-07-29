import Carousel from "../components/Carousel";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-container mt-28"
    >
      <div>
        <div>
          <h2 className="text-6xl font-poppins max-md:text-5xl text-secondary-dark-600">
            OUR PROJECTS
          </h2>
          <div className="h-[1px] w-full mt-2 bg-gradient-to-r from-secondary-dark-500 to-transparent"></div>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
