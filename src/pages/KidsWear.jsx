import products from "../data/products";
import ProductCard from "../components/product/ProductCard";

const KidsWear = () => {
  const kidsProducts = products.filter(
    (product) => product.category === "kids"
  );

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Kids Wear</h1>
        <p className="text-gray-500">
          Explore our latest kids collection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {kidsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsWear;