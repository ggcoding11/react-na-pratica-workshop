import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="card bg-base-100 max-w-96 shadow-md border border-neutral-300"
    >
      <figure>
        <img src={product.thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={`/products/${product.id}`}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
