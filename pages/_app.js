import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
// import '@/styles/index.css';

import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import  "./App.css";
import { useEffect, useState } from "react";
// import '../tailwind.css';
export default function App({ Component }) {
  const [progress, setProgress] = useState(0); //loading bar

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      //loading bar he listenr ahe start jhalyavr progress 40 milisecond
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      ///loading bar he listenr ahe start compalete jhalyaver 100milisecond

      setProgress(100);
    });
  }, [router.query]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime={400} //500 milisecond
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component />
      <button className="floating-button  text-xl  font-bold font-serif" >
        Looking For Internship?
      </button>
      <Footer />


    </>
  );
}
