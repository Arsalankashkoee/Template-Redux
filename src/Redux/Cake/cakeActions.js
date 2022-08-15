import { BUY_CAKE } from "./cakeTypes"; // const BUY_CAKE = "BUY_CAKE";

//----------- action creator -----------

// export function buyCake() {
//   return {
//     type: BUY_CAKE,
//   };
// }
export function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    payload: number,
  };
}
