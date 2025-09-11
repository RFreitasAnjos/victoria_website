const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin mb-6"></div>
        
        {/* Texto de carregamento */}
        <p className="text-gray-700 text-lg sm:text-xl font-medium">
          Carregando, por favor aguarde...
        </p>
      </div>
    </div>
  );
};

export default Loading;
