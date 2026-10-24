import React from "react";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import ProductList from "../components/ProductList";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const pagarTudo = () => {
    setCart([]);

    alert("Todos os itens foram pagos!");
  };

  return (
    <div
      id="main"
      className="min-h-screen flex flex-col items-center gap-4 p-4"
    >
      {cart.length !== 0 ? (
        <>
          <button onClick={pagarTudo} className="btn">
            Pagar todos os itens
          </button>

          <ProductList products={cart} />
        </>
      ) : (
        <span>O carrinho está vazio!</span>
      )}
    </div>
  );
};

export default CartPage;
