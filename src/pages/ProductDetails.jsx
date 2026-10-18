import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <h1 className="text-center py-20">
                Product not found
            </h1>
        );
    }

    return (
        <div className="container py-10">

            <div className="grid md:grid-cols-2 gap-10">

                <img
                    src={product.img}
                    alt={product.title}
                    className="w-full max-w-md mx-auto rounded-xl"
                />

                <div>

                    <h1 className="text-4xl font-bold">
                        {product.title}
                    </h1>

                    <p className="text-gray-500 mt-3">
                        {product.description}
                    </p>

                    <h2 className="text-3xl text-primary font-bold mt-6">
                        ₹{product.price}
                    </h2>

                    <p className="mt-2">
                        ⭐ {product.rating}
                    </p>

                    <p className="mt-2">
                        Brand :
                        <span className="font-semibold">
                            {" "}
                            {product.brand}
                        </span>
                    </p>

                    <p className="mt-2">
                        Color :
                        <span className="font-semibold">
                            {" "}
                            {product.color}
                        </span>
                    </p>

                    <button className="bg-primary text-white px-8 py-3 rounded-xl mt-8">
                        Buy Now
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;