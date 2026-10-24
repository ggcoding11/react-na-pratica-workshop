import { Link } from "react-router-dom";
import FetchContent from "../components/FetchContent";
import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

const categories = [
  {
    id: 0,
    name: "Beauty",
    slug: "beauty",
  },
  {
    id: 1,
    name: "Fragrances",
    slug: "fragrances",
  },
  {
    id: 2,
    name: "Furniture",
    slug: "furniture",
  },
  {
    id: 3,
    name: "Groceries",
    slug: "groceries",
  },
];

const HomePage = () => {
  const { data, loading, error } = useFetch("/products?limit=12");

  const products = data?.products;

  return (
    <div
      id="main"
      className="min-h-screen flex flex-col items-center gap-4 p-4"
    >
      <FetchContent loading={loading} error={error}>
        <div className="flex flex-col gap-4 w-full max-w-7xl">
          <h1 className="text-center text-medium font-semibold">
            Confira o nosso catálogo de produtos
          </h1>

          <div>
            <ul className="flex justify-center gap-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/products/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <ProductList products={products} />
          </div>
        </div>
      </FetchContent>
    </div>
  );
};

export default HomePage;
