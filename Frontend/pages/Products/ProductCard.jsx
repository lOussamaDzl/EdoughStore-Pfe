import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import HeartIcon from "./HearIcon";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("item added successfully");
  };
  return (
    <div
      className="max-w-sm relative bg-[#1A1A1A] rounded-lg shadow dark:bg-gray-800
    dark:border-gray-700"
    >
      <section className="relative">
        <Link to={`/product/${p._id}`}>
          <span
            className="absolute buttom-3 right-10 bg-white text-black text-sm font-medium
                mr-2 px-2.5 py-0.5 rounded-full "
          >
            {p?.brand}
          </span>
          <img
            className="cursor-pointer w-full"
            src={p.image}
            alt={p.name}
            style={{ height: "170px", objectFit: "cover" }}
          />
        </Link>
        <HeartIcon product={p} />
      </section>

      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="mb-2 text-xl text-white dark:text-white">{p?.name}</h5>

          <p className="text-[#186F65] font-semibold ">
            {p?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "DZD",
            })}
          </p>
        </div>

        <p className="mb-3 font-normal text-[#CFCFCF]">
          {p?.description?.substring(0, 60)} ...
        </p>

        <section className="flex justify-between items-center">
          <Link
            to={`/product/${p._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white
                    bg-[#186F65] rounded-lg hover:bg-[#47988d] focus:ring-4 focus:outline-none
                    focus:ring-[#186F65] dark:bg-[#47988d] dark:hover:bg-[#2A5B54] "
          >
            Read More
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5H12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          <button
            className="p-2 rounded-full text-white"
            onClick={() => addToCartHandler(p, 1)}
          >
            <AiOutlineShoppingCart size={25} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
