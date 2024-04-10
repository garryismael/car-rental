import { forwardRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { FaCalendar, FaSearch } from "react-icons/fa";
import useRent from "../hooks/useRent";

const InputCalendar = forwardRef(({ value, onClick }, ref) => (
  <button
    className="relative w-full bg-gray-100 px-4 text-xs rounded-full h-12 lg:h-8 text-left"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    ref={ref}
  >
    {value}
    <FaCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
  </button>
));

InputCalendar.displayName = "InputCalendar";
InputCalendar.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

const Hero = () => {
  const {findAvailableCars} = useRent();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="h-screen bg-hero bg-no-repeat bg-cover bg-bottom">
      <div className="absolute-center w-5/6 lg:w-3/4 mx-auto">
        <h1 className="uppercase text-xs text-white">Our Packages</h1>
        <h2 className="font-bold text-4xl text-white">Search your holiday</h2>
        <div className="bg-white shadow-md rounded-xl h-full lg:h-32 p-5 lg:p-10 mt-10">
          <form onSubmit={findAvailableCars} noValidate className="flex flex-col sm:flex-row items-center justify-around gap-6">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="destination"
                className="text-xs"
              >
                Search your destination
              </label>
              <div className="relative">
                <input
                  id="destination"
                  placeholder="your destination..."
                  type="text"
                  className="w-full bg-gray-100 pl-4 pr-8 text-xs rounded-full h-12 lg:h-8"
                />
                <IoLocationOutline className="absolute right-2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="w-full block">
              <label
                htmlFor="date"
                className="text-xs block mb-1"
              >
                Select your date
              </label>
              <DatePicker
                selected={startDate}
                minDate={new Date()}
                onChange={(date) => setStartDate(date)}
                customInput={<InputCalendar />}
                wrapperClassName="w-full"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="date"
                className="text-xs"
              >
                Max price
              </label>
              <input
                type="number"
                placeholder="price..."
                className="w-full bg-gray-100 px-4 text-xs rounded-full h-12 lg:h-8"
              />
            </div>
            <div className="relative pt-4">
              <button
                type="submit"
                className="px-7 bg-secondary h-12 lg:h-8 gap-3 text-white rounded-full flex items-center"
              >
                <span>Search</span>
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
