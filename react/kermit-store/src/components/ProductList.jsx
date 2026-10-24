import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
