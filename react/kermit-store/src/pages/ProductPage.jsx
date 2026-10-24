import React, { useContext } from "react";
import FetchContent from "../components/FetchContent";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { CartContext } from "../contexts/CartContext";

const ProductPage = () => {
  const { id } = useParams();

  const { cart, setCart } = useContext(CartContext);

  const { data, loading, error } = useFetch(`/products/${id}`);

  const product = data;

  return (
    <div
      id="main"
      className="min-h-screen flex flex-col items-center gap-4 p-4"
    >
      <FetchContent loading={loading} error={error}>
        {product && (
          <>
            <div className="grid grid-cols-1">
              <h1 className="font-semibold text-lg">{product.title}</h1>
              <p className="text-2xl">{product.price}</p>
            </div>

            <div className="card w-50 bg-base-100 card-xs shadow-sm">
              <div className="card-body flex flex-col text-center text-xl">
                <p>Rating: {product.rating}</p>
                <p>In stock: {product.stock}</p>
              </div>
            </div>

            <div>
              <img src={product.thumbnail} alt="product-image" />
            </div>

            <button
              onClick={() => {
                setCart([...cart, product]);
                alert("Produto adicionado no carrinho!");
              }}
              className="btn"
            >
              Add to cart
            </button>
          </>
        )}
      </FetchContent>
    </div>
  );
};

export default ProductPage;
