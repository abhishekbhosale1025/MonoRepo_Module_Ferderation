// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// import { useCount } from '@/counter/Store'
// import Navbar from 'main/Navbar'
import dynamic from "next/dynamic";
// const CountProvider = dynamic(
//   async () => (await import("counter/Store")).CountProvider
// );
const SharedStateProvider = dynamic(
  async () => await import("sharedState/sharedStateContext").SharedStateProvider
);
import Homeapp from "./home";
console.log("SharedStateProvider :" + SharedStateProvider);
export default function Home() {
  return (
    <>
      <SharedStateProvider>
        <Homeapp />
      </SharedStateProvider>
    </>
  );
}
