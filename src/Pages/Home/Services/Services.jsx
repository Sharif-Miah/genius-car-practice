import React, { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem/ServicesItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h4 className="text-center text-red-500 text-md font-bold">Services</h4>
      <h1 className="text-center text-5xl font-bold mb-5">Our Service Area</h1>
      <p className=" text-zinc-500 text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised
      </p>
      <p className=" text-zinc-500 text-center">
        words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-3 my-12 gap-5">
        {services?.map((service) => (
          <ServicesItem key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline hover:bg-red-500 hover:text-white text-red-500 hover:border-red-500 border-red-500">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
