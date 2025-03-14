import { FaStar } from "react-icons/fa";

const StarRating = (rating) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={"text-yellow-400" }
          size={16}
        />
      ))}
    </div>
  );
};

export default StarRating;
