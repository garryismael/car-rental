import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Rating = ({ user, rating, comment }) => {
  const { name, title, image } = user;
  const stars = Array(rating).fill(0);
  return (
    <div className="relative bg-white shadow-xl p-4 w-72 rounded-xl hover:shadow-2xl">
      <div className="absolute -top-5 w-12 left-4 h-12 rounded-full">
        <img
          src={image}
          alt={name}
          className="object-cover w-12 h-12 rounded-full"
        />
      </div>
      <div className="flex items-center justify-between pt-6">
        <div className="mb-4">
          <p className="text-sm text-bold">{name}</p>
          <p className="text-xs font-thin mt-0">{title}</p>
        </div>
        <div className="flex items-center gap-1">
          {stars.map((_item, i) => (
            <FaStar
              key={i}
              className="text-yellow-400 text-sm"
            />
          ))}
        </div>
      </div>
      <p className="text-xs font-light">{comment}</p>
    </div>
  );
};

Rating.propTypes = {
  user: PropTypes.object,
  rating: PropTypes.number,
  comment: PropTypes.string,
};

export default Rating;
