import { useNavigate } from "react-router-dom";
const useRent = () => {
  const navigate = useNavigate();

  const findAvailableCars = (e) => {
    e.preventDefault();
    navigate("/car-available");
  };

  return { findAvailableCars };
};

export default useRent;
