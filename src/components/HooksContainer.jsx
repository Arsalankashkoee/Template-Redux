import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/Cake/cakeActions";

const HooksContainer = () => {
  //   const numOfCakes = useSelector((state) => state.numOfCakes);

  // ------ combine-reducer -----
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <section className="bg-violet-100 p-3">
      <div className="container">
        <h2 className="">Number of cakes : {numOfCakes} </h2>
        <button
          onClick={() => dispatch(buyCake())}
          className="bg-violet-400 text-white px-3 py-1 rounded-lg shadow-lg mt-3"
        >
          Buy cake
        </button>
      </div>
    </section>
  );
};

export default HooksContainer;
