import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="navbar flex justify-center bg-base-100 shadow-sm">
      <div className="navbar-content flex justify-center w-full max-w-7xl">
        <Link className="flex flex-1 gap-2 items-center" to="/home">
          <img
            className="w-0 sm:w-12"
            src="/kermit-icon.png"
            alt="kermit-store-icon"
          />
          <span className="btn btn-ghost text-xl p-0">Kermit Store</span>
        </Link>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart ? cart.length : 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {cart ? cart.length : 0} Items
                </span>
                <span className="text-info">
                  Subtotal: $
                  {cart
                    ? cart
                        .reduce((soma, product) => (soma += product.price), 0)
                        .toFixed(2)
                    : 0}
                </span>
                <div className="card-actions">
                  <Link to={"/cart"} className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
