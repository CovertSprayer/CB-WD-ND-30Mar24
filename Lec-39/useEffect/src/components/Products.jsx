import axios from 'axios'
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getData() {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    console.log("rendering");
  }

  useEffect(()=>{
    getData();

    // return () => {
    //   console.log("hi there!")
    // }
  }, [])

  return (
    <div>Lorem.</div>
  )
}

export default Products