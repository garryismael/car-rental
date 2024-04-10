import { partners } from "../constants";

const Partner = () => {
  return (
    <section className="h-48">
      <h1 className="title">OUR PARTNERS</h1>
      <div className="flex items-center justify-around mt-10 overflow-hidden">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center text-3xl gap-4">
            {partner.icon}
            <p className="text-sm">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
