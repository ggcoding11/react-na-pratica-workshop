import { useParams } from "react-router-dom";
import FetchContent from "../components/FetchContent";
import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

const CategoryPage = () => {
  const { category } = useParams();

  const { data, loading, error } = useFetch(`/products/category/${category}`);

  const products = data?.products;

  return (
    <div id="main" className="min-h-screen flex flex-col items-center p-4">
      <FetchContent loading={loading} error={error}>
        <div className="flex flex-col gap-4 w-full max-w-7xl">
          <h1 className="text-center text-medium font-semibold">
            Confira o nosso catálogo de produtos
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <ProductList products={products} />
          </div>
        </div>
      </FetchContent>
    </div>
  );
};

export default CategoryPage;
