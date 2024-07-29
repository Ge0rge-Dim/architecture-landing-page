import BentoGrid from "../components/BentoGrid";

const Hero = () => {
  return (
    <section className="mt-28">
      <div className="flex w-full px-16 items-center flex-col">
        <h1 className="text-8xl max-md:text-7xl max-sm:text-6xl uppercase font-poppins text-center text-secondary-dark-600">
          Building a <br />
          <span className="text-stroke">Sustainable</span> Future.
        </h1>
        <BentoGrid />
      </div>
    </section>
  );
};

export default Hero;
