import React, { useState, useEffect, createContext, useContext } from "react";


const ProductDetails = ({ id }) => {
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);
  
    if (!product) return <p>Loading...</p>;
  
    return (
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };

  export default ProductDetails