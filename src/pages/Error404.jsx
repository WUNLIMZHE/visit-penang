import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-black">
          Oops! This destination is a little off the map.
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Let&apos;s find our way back home.
        </p>

        {/* Illustration */}
        <div className="mt-8 w-full max-w-xs md:max-w-md">
          <img
            src="src/assets/error-404.webp"
            alt="Lost"
            className="w-full h-auto mx-auto"
          />
        </div>

        {/* Go Home Link */}
        <Link
          to="/"
          className="mt-10 flex items-center gap-2 text-gray-700 hover:text-black transition text-sm md:text-base"
        >
          <span className="text-lg md:text-xl">↩</span> Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
