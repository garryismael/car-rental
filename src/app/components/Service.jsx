import PropTypes from "prop-types";

const Service = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col justify-center w-64 p-6 text-center hover:shadow-md">
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center p-2 bg-secondary w-12 h-12 text-xl text-white rounded-lg">
          {icon}
        </div>
      </div>
      <h1 className="font-bold py-4">{title}</h1>
      <p className="text-sm">{text}</p>
    </div>
  );
};

Service.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Service;
