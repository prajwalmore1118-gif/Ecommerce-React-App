import products from "../data/products";
import ProductCard from "../components/product/ProductCard";

const AllProducts = () => {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        All Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;