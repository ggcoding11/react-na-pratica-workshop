import React, { use, useEffect, useState } from "react";
import api from "../services/api";

const HomePage = () => {
  const [laptops, setLaptops] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [furniture, setFurniture] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLaptops = await api.get("/products/category/laptops");
        const responseBeauty = await api.get("/products/category/beauty");
        const responseFurniture = await api.get("/products/category/furniture");

        setLaptops(responseLaptops.data.products);
        setBeauty(responseBeauty.data.products);
        setFurniture(responseFurniture.data.products);
      } catch (error) {
        setError(true);

        console.log("Erro ao receber os produtos da API");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex flex-1 gap-2 items-center">
            <img
              className="w-0 sm:w-12"
              src="/kermit-icon.png"
              alt="kermit-store-icon"
            />
            <a className="btn btn-ghost text-xl p-0">Kermit Store</a>
          </div>
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
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="min-h-screen flex flex-col items-center gap-4 py-4 px-4">
        {loading ? (
          <span className="text-xl">Loading...</span>
        ) : error ? (
          <span className="text-xl">Erro ao puxar os produtos da API!</span>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-center text-medium font-semibold">
              Confira o nosso catálogo de produtos
            </h1>

            <div>
              <h3>Laptops</h3>

              <div className="flex flex-nowrap">
                {laptops.map((laptop, index) => (
                  <div key={index} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Card Title</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Tablets</h3>

              <div className="flex flex-nowrap">
                {laptops.map((laptop, index) => (
                  <div key={index} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Card Title</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Smartphones</h3>

              <div className="flex flex-nowrap">
                {laptops.map((laptop, index) => (
                  <div key={index} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Card Title</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <footer></footer>
    </div>
  );
};

export default HomePage;
