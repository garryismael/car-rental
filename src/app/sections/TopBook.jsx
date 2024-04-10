import Car from "../components/Car";
import { cars } from "../constants";
import { PiArrowRightThin } from "react-icons/pi";

const TopBook = () => {
  return (
    <section id="cars" className="relative wrapper mt-8 mb-20">
      <h1 className="title">Top book now</h1>
      <article className="flex items-center justify-between content-between flex-wrap mt-12 gap-6">
        {cars.map((car) => (
          <Car
            key={car.id}
            {...car}
          />
        ))}
      </article>
      <a
        href="#"
        className="absolute left-1/2 -translate-x-1/2 inline-flex items-center gap-2 justify-center border border-gray-300 rounded-full px-4 py-1 my-3"
      >
        <p className="text-sm">See all</p>
        <PiArrowRightThin />
      </a>
    </section>
  );
};

export default TopBook;
