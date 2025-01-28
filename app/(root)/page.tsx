import ProductList from "@/components/shared/header/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const products = await getLatestProducts();
  return (
    <>
      <ProductList data={products} title="Newest Product's Data" />
    </>
  );
};

export default HomePage;
