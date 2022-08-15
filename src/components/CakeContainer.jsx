import { buyCake } from "../Redux/Cake/cakeActions";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <section className="bg-violet-100 p-3">
      <div className="container">
        <h2 className="">Number of cakes : {props.numOfCakes} </h2>
        <button
          onClick={props.buyCake}
          className="bg-violet-400 text-white px-3 py-1 rounded-lg shadow-lg mt-3"
        >
          Buy cake
        </button>
      </div>
    </section>
  );
};

// export default CakeContainer;

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
