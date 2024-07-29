import logoWhite from "../assets/icons/logo-white.svg";
import { socialMedia, footerLinksOne, footerLinksTwo } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-container mt-28 bg-secondary-dark-600 p-16 rounded-xl"
    >
      <div className="flex max-sm:flex-col gap-10 items-start justify-between">
        <div className="flex flex-col items-start">
          <a href="">
            <img
              src={logoWhite}
              alt="Edgingtons architects logo"
              className="w-52 cursor-pointer pb-5"
            />
          </a>
          <p className="font-karla text-stone-200 font-thin text-lg cursor-pointer">
            <span className="font-bold text-xl">t:</span> +44 (0) 1753 857092{" "}
            <br />
            <span className="font-bold text-xl">
              e:
            </span> mail@edgingtons.co.uk <br />
            <span className="font-bold text-xl">a:</span> Meridian House, 2
            Russell Street, Windsor, Berkshire, SL4 1HQ
          </p>
          <p className="font-karla text-base text-stone-200 font-thin mt-5">
            Edgington Spink + Hyne Limited is Registered in England & Wales.{" "}
            <br />
            Company Registration Number 8321510
          </p>
          <p className="font-karla text-base text-stone-200 font-thin mt-5">
            Registered office: Burnham Yard, London End, Beaconsfield, Bucks,
            HP9 2JH
          </p>
        </div>

        <div className="flex gap-10">
          <ul className="flex flex-col">
            <h3 className="font-karla text-2xl mb-5 font-medium text-slate-100">
              Quick Links
            </h3>
            {footerLinksOne.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-karla text-lg font-light text-stone-200 hover:text-primary-green-600 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            <h3 className="font-karla font-medium text-2xl mb-5 text-stone-100">
              Legal
            </h3>
            {footerLinksTwo.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-karla text-lg font-light text-stone-200 hover:text-primary-green-600 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li> </li>
        </ul>
      </div>
      <div className="flex flex-col">
        {" "}
        <div className="h-[1px] w-full my-4 bg-stone-300"></div>
        <div className="flex flex-row justify-between items-center">
          <p className="font-karla text-stone-200 font-thin text-xs">
            All content ©2024
          </p>
          <div className="flex flex-row gap-4">
            {socialMedia.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="h-6 w-6 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
