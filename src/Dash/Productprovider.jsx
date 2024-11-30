import axios, { all } from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Productcontext = createContext();

function Productprovider({ children }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catgories, setCatgeries] = useState("");
  const [allproduct, setAllproduct] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const productFuntion = async () => {
      try {
        const Response = await axios.get("http://localhost:3004/Products");
        setProduct(Response.data);
        setAllproduct(Response.data);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    productFuntion();
  }, []);

  // for filtering by calagories
  console.log(product);
  useEffect(() => {
    if (catgories) {
      try {
        console.log(catgories);
        const filtered = allproduct.filter((p) => p.categories === catgories);
        setProduct(filtered);
        console.log(filtered);
      } catch (error) {
        console.error(error);
      }
    }
  }, [catgories]);

useEffect(()=>{
  if(search.trim()==""){
    setProduct(allproduct.filter((p)=>!catgories||p.categories===catgories))
  }else{
  const searching=allproduct.filter((p)=>
    p.name.toLowerCase().includes(search.toLowerCase())
   
  )
  setProduct(searching)}
 
}, [search,allproduct,catgories])

  return (
    <div>
      <Productcontext.Provider
        value={{ product, loading, setProduct, setCatgeries, setSearch }}
      >
        {children}
      </Productcontext.Provider>
    </div>
  );
}

export default Productprovider;
