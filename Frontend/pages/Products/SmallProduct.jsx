import { Link } from "react-router-dom";
import HeartIcon from "./HearIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[rem] ml-[6rem] p-3">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-outo rounded"
        />
        <HeartIcon product={product} />

        <div className="p-54">
          <Link to={`/product/${product._id}`}>
            <h2 className="flex justify-between items-center">
              <div>{product.name}</div>
              <span
                className=" bg-[#186F65] text-white text-sm font-medium mr-2
                            px-3 py-0.5 rounded-full dark:bg-[#186F65] dark:text-white"
              >
                {product.price} DA
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallProduct;
