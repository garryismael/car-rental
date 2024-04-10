import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import useRent from "../hooks/useRent";

const Car = ({ id, name, price, image, star, location }) => {
  const { chooseCar } = useRent();
  return (
    <div
      className="w-48 flex flex-col cursor-pointer"
      onClick={() => chooseCar(id)}
    >
      <div className="relative mb-4">
        <div className="w-48 h-56">
          <img
            src={image}
            alt={name}
            className="object-cover h-56 w-48 rounded-lg"
          />
        </div>
        <div className="flex items-center gap-2 bg-dark-slate-gray/60 px-2 rounded-md py-1.5 absolute right-4 top-4">
          <FaStar className="text-yellow-400 text-sm" />
          <p className="text-white text-sm">{star}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div className="flex items-center text-sm gap-2">
        <CiLocationOn />
        <p className="text-xs font-light">{location}</p>
      </div>
    </div>
  );
};

Car.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  star: PropTypes.number,
  location: PropTypes.string,
};

export default Car;
