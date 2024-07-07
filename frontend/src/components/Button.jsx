/* eslint-disable react/prop-types */
function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-black py-3 px-3 text-white w-full mb-3 rounded-md"
    >
      {label}
    </button>
  );
}

export default Button;
