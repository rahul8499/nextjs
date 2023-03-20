import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [progress, setProgress] = useState(0); //loading bar

  const [key, setKey] = useState(0);

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

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCard(JSON.parse(localStorage.getItem("cart")));
        //cart madhe page refresh kel ki rs he 0 yet ahe tyamule localstorage madhun cart la ghevun cart la save kel
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
    }
    setKey(Math.random());
  }, [router.query]);

  const saveCard = (myCart) => {
    //         if (typeof window === 'undefined') {
    //     localStorage.setItem('cart', myCart);
    // }

    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCard(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCard({});
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    //eka item che 2 quantity keli te apn remove kru shkto
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCard(newCart);
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {};
    newCart[itemCode] = { qty: 1, price, name, size, variant };
    setCart(newCart);
    saveCard(newCart);
    console.log(newCart);
    router.push("/checkout");
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random()); // component rerender honysathi
    router.push("/");
  };
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime={400} //500 milisecond
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar
        logout={logout}
        user={user}
        key={key}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        buyNow={buyNow}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
