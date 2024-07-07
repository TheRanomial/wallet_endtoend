import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Footer2({ label }) {
  return (
    <div className="text-slate-500 text-md pt-2 px-4 pb-4">
      {label}
      <span className="underline mx-1 text-black">
        {" "}
        <Link to="/signup">Sign up</Link>
      </span>
    </div>
  );
}

export default Footer2;
