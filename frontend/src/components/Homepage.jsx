import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="text-center w-full max-w-2xl px-4">
        <h1 className="text-6xl font-semibold mb-20 text-white">Paytm Wallet</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/signup"
            className="w-64 px-6 py-3 text-lg bg-[#DCA47C] text-slate-700 rounded-lg hover:bg-green-300 transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="w-64 px-6 py-3 text-lg bg-[#DCA47C] text-slate-700 rounded-lg hover:bg-green-300 transition duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/dashboard"
            className="w-64 px-6 py-3 text-lg bg-[#DCA47C] text-slate-700 rounded-lg hover:bg-green-300 transition duration-300"
          >
            Go to Wallet
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
