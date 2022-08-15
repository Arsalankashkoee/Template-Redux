import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../Redux/IceCream/icecreamActions";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <section className="bg-violet-100 p-3">
      <div className="container">
        <h2 className="">Number of IceCream : {numOfIceCream} </h2>
        <button
          onClick={() => dispatch(buyIceCream())}
          className="bg-violet-400 text-white px-3 py-1 rounded-lg shadow-lg mt-3"
        >
          Buy icecream
        </button>
      </div>
    </section>
  );
};

export default IceCreamContainer;
