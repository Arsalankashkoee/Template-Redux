import { Provider } from "react-redux";
import UserContainer from "./components/UserContainer";
// import CakeWithPayload from "./components/CakeWithPayload";
// import HooksContainer from "./components/HooksContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import CakeContainer from "./components/CakeContainer";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        {/* <CakeContainer /> */}

        {/* <HooksContainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <CakeWithPayload /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
