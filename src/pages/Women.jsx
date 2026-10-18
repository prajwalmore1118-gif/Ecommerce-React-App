import products from "../data/products";
import ProductCard from "../components/product/ProductCard";

const Women = () => {
  const womenProducts = products.filter(
    (item) => item.category === "women"
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Women's Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Women;