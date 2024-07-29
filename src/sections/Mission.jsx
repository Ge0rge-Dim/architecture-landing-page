import PrimaryButton from "../components/PrimaryButton";
import arrowUp from "../assets/icons/arrow-up.svg";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-container mt-28"
    >
      <div className="flex flex-col">
        <h2 className="text-6xl max-md:text-5xl font-poppins text-secondary-dark-600">
          OUR MISSION
        </h2>
        <div className="h-[1px] w-full mt-2 bg-gradient-to-r from-secondary-dark-500 to-transparent"></div>
      </div>
      <div className="w-full flex">
        <div className="flex flex-col items-start mt-10 max-w-max align-middle ml-auto mr-10 text-xl max-md:text-lg">
          <p className="text-left font-karla font-light tracking-wide">
            We are committed to designing and delivering buildings <br /> that
            champion the well-being of their users and have a <br /> positive
            impact on the environment.
          </p>
          <p className="pt-3 text-left font-karla font-light tracking-wide">
            From residential homes to commercial spaces, our projects <br />{" "}
            reflect our core values of sustainability, quality, and social
            value.
          </p>
          <PrimaryButton label="Read More" iconURL={arrowUp} />
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
