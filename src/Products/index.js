import { useGetProduct } from "./hooks/UseCollection";
import ProductCard from "../Atoms/UserCards";
import "./index.css";

// import (useGetProduct)

const Products = () => {
  const { product, error, loading } = useGetProduct();
  return (
    <div className="images">
      {loading && <h2>Loading Products...</h2>}
      {error.length > 0 && <h2>{error}</h2>}
      {product.length > 0
        ? product.map((product) => (
            <div className="border">
            <ProductCard
            
              key={product.id}
              image={product.image}
              title={`${product.title}
            ${product.price} 
            ${product.category} `}
            />
            </div>
          ))
        : !loading && <h2>No products found</h2>}
    </div>
  );
};

export default Products;
