import ProductCard from "./product-card";
import { Product } from "@/types";

const ProductList = ({ data, title }: { data: Product[]; title?: string }) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((prod: Product) => (
              <ProductCard key={prod.name} product={prod}></ProductCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>No Products Found</div>
        </>
      )}
    </div>
  );
};

export default ProductList;
