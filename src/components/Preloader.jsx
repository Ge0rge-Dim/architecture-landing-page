const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary-dark-600">
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-primary-green-400"></div>
    </div>
  );
};

export default Preloader;
