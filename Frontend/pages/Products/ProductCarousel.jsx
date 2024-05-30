import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../componemts/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (isLoading) return null;
  if (error) {
    return (
      <Message variant="danger">
        {error?.data?.message || error.message}
      </Message>
    );
  }

  return (
    <div className="mb-4 xl:block lg:block md:block">
      <Slider
        {...settings}
        className="xl:w-[48rem] lg:w-[42rem] md:-[36rem] sm:w-[30rem] sm:block"
      >
        {products.map((product) => (
          <div key={product._id}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg object-cover h-[30rem]"
            />
            <div className="flex justify-between w-[20rem]">
              <div className="one">
                <h2>{product.name}</h2>
                <p>{product.price} DA</p> <br /> <br />
                <p className="w-[25rem]">
                  {product.description.substring(0, 170)}...
                </p>
              </div>
              <div className="flex justify-between w-[20rem]">
                <div className="one">
                  <h1 className="flex items-center mb-6 w-[8rem]">
                    <FaStore className="mr-2 text-black" /> Brand:{" "}
                    {product.brand}
                  </h1>
                  <h1 className="flex items-center mb-6 w-[8rem]">
                    <FaClock className="mr-2 text-black" /> Added:{" "}
                    {moment(product.createdAt).fromNow()}
                  </h1>
                  <h1 className="flex items-center mb-6 w-[8rem]">
                    <FaStar className="mr-2 text-black" /> Reviews:{" "}
                    {product.numReviews}
                  </h1>
                </div>
                <div className="two">
                  <h1 className="flex items-center mb-6 w-[10rem]">
                    <FaStar className="mr-2 text-black" /> Ratings:{" "}
                    {Math.round(product.rating)}
                  </h1>
                  <h1 className="flex items-center mb-6 w-[10rem]">
                    <FaShoppingCart className="mr-2 text-black" /> Quantity:{" "}
                    {product.quantity}
                  </h1>
                  <h1 className="flex items-center mb-6 w-[10rem]">
                    <FaBox className="mr-2 text-black" /> In Stock:{" "}
                    {product.countInStock}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
