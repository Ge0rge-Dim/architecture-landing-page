import { heroImages } from "../constants";

const BentoGrid = () => {
  const imagesArray = Object.values(heroImages);
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2 gap-2 pt-10">
      {imagesArray.map((image, index) => (
        <div
          key={index}
          className={`${
            index === 2 ? "max-md:col-span-2 max-sm:col-span-2" : ""
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index}`}
            className="w-full h-full object-fill"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
