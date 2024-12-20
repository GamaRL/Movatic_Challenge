/**
 * A component that helps to show a loading spin while data is
 * still beeing loaded from de API.
 */
const LoadingSpin = () => {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
}

export default LoadingSpin;