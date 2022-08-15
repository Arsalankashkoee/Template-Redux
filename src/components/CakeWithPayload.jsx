import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/Cake/cakeActions";

const CakeWithPayload = () => {
  const [number, setNumber] = useState(0);
  // ------ combine-reducer -----
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <section className="bg-violet-100 p-3">
      <div className="container">
        <h2 className="">Number of cakes : {numOfCakes} </h2>
        <input type="text" className="mt-3 px-3 py-1 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:border-violet-500" onChange={(e) => setNumber(e.target.value)} />
        <button
          onClick={() => dispatch(buyCake(number))}
          className="bg-violet-400 text-white px-3 py-1 rounded-lg shadow-lg mt-3"
        >
          Buy {number} cake
        </button>
      </div>
    </section>
  );
};

export default CakeWithPayload;
