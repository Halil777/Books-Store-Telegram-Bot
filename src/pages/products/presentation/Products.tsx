import { FC } from "react";
import ProductsHero from "../components/ProductsHero";
import AboutService from "../components/AboutService";
import Books from "../components/Books";

const Products: FC = () => {
  return (
    <div>
      <ProductsHero />
      <AboutService />
      <Books />
    </div>
  );
};

export default Products;
