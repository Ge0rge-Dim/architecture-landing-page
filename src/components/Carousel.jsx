import { carouselImages } from "../constants";
import arrowUpLight from "../assets/icons/arrow-light.svg";
import SecondaryButton from "./SecondaryButton";

const Carousel = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 auto-rows-[500px] max-md:auto-rows-[350px] gap-3 mt-10">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`rounded-2xl relative w-full h-full ${
            index === 0 ? "col-span-2 max-sm:col-span-1" : ""
          } ${index === 3 ? "max-lg:row-span-1 max-sm:row-span-1" : ""}`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 w-full h-full object-cover">
            <a href="">
              <SecondaryButton label={image.title} iconURL={arrowUpLight} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
