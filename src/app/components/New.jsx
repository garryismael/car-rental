import PropTypes from "prop-types";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const New = ({ title, text, image, date }) => {
  return (
    <div className="w-72 flex flex-col pb-6 bg-white shadow-lg rounded-xl hover:shadow-2xl">
      <div className="w-72 h-44">
        <img
          src={image}
          alt={title}
          className="object-cover w-72 h-44 rounded-tr-xl rounded-tl-xl"
        />
      </div>
      <div className="px-4">
        <div className="flex items-center gap-4 py-3">
          <HiOutlineCalendarDays />
          <p className="text-xs font-light">{date}</p>
        </div>
        <h1 className="h-14 font-semibold">{title}</h1>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

New.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
};

export default New;
