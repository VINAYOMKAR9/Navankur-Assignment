import React, { useState, useEffect, createContext, useContext ,useNavigate} from "react";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  
    return (
      <div>
        <h2>Products</h2>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.title} - ${product.price}</h3>
            <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
          </div>
        ))}
      </div>
    );
  };

  export default ProductList