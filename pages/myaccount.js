import React from "react";
import  { useEffect } from "react";
import { useRouter } from "next/navigation";

const myaccount = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
        router.push('/myaccount')
    }
  }, []); // mnje url change jhala ki ha useEffect run hoyil
  return <div>my account page</div>;
};

export default myaccount;
