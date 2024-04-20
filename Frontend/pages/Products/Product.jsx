import { Link } from "react-router-dom";
import HeartIcon from "./HearIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[20rem] ml-[2rem] p-3 relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[20rem] rounded"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span
              className="bg-green text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5
                rounded-full dark:bg-green-900 dark:text-green-300"
            >
              {product.price} DA
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
