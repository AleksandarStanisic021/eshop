import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/header/product/product-list";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const HomePage = async () => {
  await delay(1000);
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Product data" />
    </>
  );
};

export default HomePage;
