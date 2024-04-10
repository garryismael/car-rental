import { subscribe } from "../../assets";

const Subscribe = () => {
  return (
    <section id="subscribe" className="wrapper bg-gray-300 flex items-center justify-between flex-wrap rounded-2xl mb-24">
      <div className="w-96 h-60">
        <img
          src={subscribe}
          alt="subscribe"
          className="object-cover w-96 h-60 rounded-tl-2xl rounded-bl-2xl"
        />
      </div>
      <div className="w-2/5 mr-12">
        <h3 className="text-2xl font-bold text-dark-slate-gray text-center">
          Get special offers,<br/>and more from travelworld
        </h3>
        <div className="relative w-full mt-4">
          <input
            type="text"
            placeholder="enter your email..."
            className="text-sm h-12 w-full shadow-md rounded-full pl-6 pr-44"
          />
          <button className="h-10 px-10 text-white hover:bg-secondary/95 bg-secondary absolute rounded-full top-1/2 right-1 -translate-y-1/2">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
