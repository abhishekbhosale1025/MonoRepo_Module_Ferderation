// import Navbar from 'main/Navbar'

import dynamic from "next/dynamic";
//import { useCount } from "../counter/Store";
//const { useCount } = dynamic(async () => await import("counter/Store"));
const Nav = dynamic(() => import("main/Navbar"));
const Footer = dynamic(() => import("main/Footer"));

// const useSharedState =
//   require("sharedState/sharedStateContext").getUseSharedState;

const useSharedState = dynamic(
  async () =>
    await import("sharedState/sharedStateContext")?.getUseSharedState()
);

console.log("useSharedState :" + useSharedState);
export default function Homeapp() {
  //[count, setCount]
  const hookState = useSharedState();
  console.log(hookState);
  return (
    <>
      {/* <Nav count={count} /> */}
      <h1>Count : {hookState?.count}</h1>
      <button
        onClick={() => {
          hookState?.setCount(hookState?.count + 1);
        }}
      >
        INCREMENT
      </button>
      {/* <Footer /> */}
    </>
  );
}
