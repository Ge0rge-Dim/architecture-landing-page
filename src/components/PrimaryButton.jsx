const PrimaryButton = ({ label, iconURL }) => {
  return (
    <button className="text-secondary-dark-600 flex justify-center items-center mt-5 font-karla text-2xl max-md:text-xl group relative">
      <span className="relative">
        {label}
        <span className="block h-0.5 bg-secondary-dark-500 opacity-70 absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 group-hover:translate-y-0 transition-transform duration-500 origin-left"></span>
      </span>
      <img
        src={iconURL}
        alt="arrow up icon"
        className="ml-3 w-4 max-md:w-3 transition-transform duration-500 group-hover:rotate-45"
      />
    </button>
  );
};

export default PrimaryButton;
