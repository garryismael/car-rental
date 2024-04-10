import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { testimonials } from "../constants";
import Rating from "../components/Rating";

const Testimonial = () => {
  return (
    <section className="wrapper pt-12 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="title !text-left">Testimonials</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 rounded-md h-8 border border-gray-300">
            <RxChevronLeft className="text-xl" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300">
            <RxChevronRight className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4 mt-12">
        {testimonials.map((testimonial) => (
          <Rating
            key={testimonial.id}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
