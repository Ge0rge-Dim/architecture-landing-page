import { teamImages } from "../constants";

const BentoGridTeam = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-2 pt-10">
      {teamImages.map((image, index) => (
        <div key={index} className="relative w-full h-full">
          <img
            src={image.src}
            alt={`Team person ${index}`}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 opacity-35 bg-gradient-to-t from-black to-transparent rounded-md cursor-pointer"></div>
          <div className="absolute bottom-0 left-0 p-5 cursor-pointer">
            <p className="text-white max-sm:text-sm text-base uppercase font-karla">
              {image.description}
            </p>
            <h3 className="text-white text-2xl max-lg:text-xl uppercase font-bold font-poppins">
              {image.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGridTeam;
