import { useNavigate } from "react-router-dom";
const useRent = () => {
  const navigate = useNavigate();

  const findAvailableCars = (e) => {
    e.preventDefault();
    navigate("/car-available");
  };

  const chooseCar = (id) => {
    navigate(`/rents/${id}`);
  };

  return { findAvailableCars, chooseCar };
};

export default useRent;
