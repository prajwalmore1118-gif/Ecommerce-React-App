import products from "../data/products";
import ProductCard from "../components/product/ProductCard";

const Trending = () => {
  const trendingProducts = products.filter(
    (product) => product.trending
  );

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Trending Products</h1>
        <p className="text-gray-500">
          Most popular products this week.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Trending;