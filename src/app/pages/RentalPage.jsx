import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cars } from "../constants";

const RentalPage = () => {
  const [car, setCar] = useState();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    if (id) {
      setCar(cars.find((item) => item.id == id));
    }
  }, [id]);
  return (
    <>
      {car && (
        <section className="wrapper flex flex-col mt-16 gap-6 pb-6 items-center justify-center h-screen">
          <h1 className="title mt-4">Rent a car</h1>
          <div className="flex items-center w-full bg-white shadow-lg">
            <div className="w-[26rem] h-[500px]">
              <img className="object-cover w-[26rem] h-full" src={car.image}/>
            </div>
            <form className="mx-auto flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="input">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="input">
                  <label htmlFor="firstName">Last Name</label>
                  <input
                    type="text"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="input">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="input">
                  <label htmlFor="cardName">Card Name</label>
                  <input
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="input">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="email"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="flex items-center ">
                <div className="input">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="string"
                    className="input-field"
                  />
                </div>
              </div>
              <button className="bg-secondary py-1 px-12 uppercase text-white rounded-full w-fit">
                submit
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default RentalPage;
