import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Footer({ label }) {
  return <div className="text-slate-500 text-md pt-2 px-4 pb-4">{label}
    <span className="underline mx-1 text-black"> <Link to="/signin">Sign in</Link></span>
   
  </div>;
}

export default Footer;
