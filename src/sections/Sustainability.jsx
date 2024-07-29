import PrimaryButton from "../components/PrimaryButton";
import arrowUp from "../assets/icons/arrow-up.svg";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <motion.section
      id="sustainability"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-container mt-28"
    >
      <div className="flex flex-col">
        <h2 className="text-6xl max-md:text-5xl font-poppins text-secondary-dark-600 uppercase  ">
          <span className="text-4xl max-md:text-3xl">Commitment to</span> <br />{" "}
          Sustainability
        </h2>
        <div className="h-[1px] w-full mt-4 bg-gradient-to-r from-secondary-dark-500 to-transparent"></div>
      </div>
      <div className="w-full flex">
        <div className="flex flex-col items-start mt-10 max-w-max align-middle ml-auto mr-10 text-xl max-md:text-lg">
          <p className="text-left font-karla font-light tracking-wide">
            At Edgingtons, sustainability and social value are <br /> at the
            core of our architectural practice.
          </p>
          <p className="pt-3 text-left font-karla font-light tracking-wide">
            We are committed to creating environmentally friendly and <br />
            community-focused buildings that meet the highest standards.
          </p>
          <p className="pt-3 text-left font-karla font-light tracking-wide">
            Led by our Sustainability Lead,{" "}
            <span className="font-medium cursor-pointer text-primary-green-600">
              Vicky Kolliopoulou
            </span>{" "}
            we integrate, <br />
            sustainable solutions from the outset of every project.
          </p>
          <PrimaryButton label="Read More" iconURL={arrowUp} />
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
