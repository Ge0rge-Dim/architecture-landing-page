const SecondaryButton = ({ label, iconURL }) => {
  return (
    <button className="text-stone-50 flex justify-center items-center rounded-xl group relative hover:bg-black hover:bg-opacity-40 transition-all duration-500 ease-in-out w-full h-full bg-transparent border-none">
      <span className="relative font-karla font-bold text-3xl max-md:text-2xl">
        {label}
      </span>
      <div className="ml-2 rounded-full transition-all duration-500 ease-in-out p-2 group-hover:rotate-45">
        <img src={iconURL} alt="arrow up icon" className="w-5 max-md:w-4" />
      </div>
    </button>
  );
};

export default SecondaryButton;
