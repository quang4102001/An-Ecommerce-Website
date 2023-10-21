import { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

function Home() {
  const products = useContext(ProductContext);
  const filteredProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto sm:max-w-none sm:mx-0 md:max-w-none md:mx-0">
            {filteredProducts.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
