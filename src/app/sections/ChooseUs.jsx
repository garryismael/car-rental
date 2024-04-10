import Service from "../components/Service";
import { services } from "../constants";

const ChooseUs = () => {
  return (
    <section className="wrapper py-12">
      <h1 className="title">Why choose us</h1>
      <div className="flex items-center justify-around flex-wrap pt-12">
        {services.map((service, i) => (
          <Service
            key={i}
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
