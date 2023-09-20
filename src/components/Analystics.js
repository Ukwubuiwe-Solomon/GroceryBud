import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analystics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold uppercase">Data Analytical Dashboard</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
            <p>React-typed supports all official options that you can find here. But also supports some extra props:styles for the outer element, class name for the outer element, the element to wrap.
            </p>
             <button className='py-2 w-[200px] mx-auto rounded-md my-6 md:mx-0 font-medium bg-black text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analystics;
