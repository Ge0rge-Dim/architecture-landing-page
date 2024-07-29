import BentoGridTeam from "../components/BentoGridTeam";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-container mt-20"
    >
      <div className="flex flex-col">
        <h2 className="text-6xl font-poppins max-md:text-5xl text-secondary-dark-600">
          MEET OUR TEAM
        </h2>
        <p className="font-karla font-light tracking-wide text-xl max-md:text-lg pt-3">
          {" "}
          We are a passionate team of architects and designers, who believe that{" "}
          <br />
          design quality is best achieved through close collaboration with our{" "}
          <br />
          Clients and key Stakeholders.
        </p>
        <div className="h-[1px] w-full mt-4 bg-gradient-to-r from-transparent to-secondary-dark-500"></div>
        <>
          <BentoGridTeam />
        </>
      </div>
    </motion.section>
  );
};

export default Team;
