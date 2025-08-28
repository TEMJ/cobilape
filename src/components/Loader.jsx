const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-16">
      <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent text-primary-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status" aria-label="loading" />
    </div>
  );
};

export default Loader;


