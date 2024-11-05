import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-600">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <p className="mt-2 text-gray-500">
        You might want to check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 text-black bg-white rounded-md shadow hover:bg-black hover:text-white transition duration-200"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
