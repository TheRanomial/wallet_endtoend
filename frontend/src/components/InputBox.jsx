/* eslint-disable react/prop-types */
function InputBox({ label, placeholder,type,onChange }) {
  return (
    <div>
      <div className="text-sm text-black font-medium text-left py-2">
       {label}
      </div>
      <input type={type} onChange={onChange} placeholder={placeholder} className="w-full mb-4 text-black rounded-lg p-4" />
    </div>
  );
}

export default InputBox;
