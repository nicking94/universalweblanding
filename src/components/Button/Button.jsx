const Button = ({ text }) => {
  return (
    <div className="flex">
      <button className="bg-violet max-w-[9rem] transition-all duration-300 hover:scale-105 text-white py-3 px-4 rounded-[8px]">
        {text}
      </button>
    </div>
  );
};
export default Button;
