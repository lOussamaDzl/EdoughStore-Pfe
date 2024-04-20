import { useSelector } from "react-redux";

const FavoritesCount = () => {
  const favorites = useSelector((state) => state.favorites);
  const FavoriteCount = favorites.length;

  return (
    <div className="absolute left-5 top-8">
      {FavoriteCount > 0 && (
        <span className="px-1 py-0 text-sm text-white bg-[#BC2A24] rounded-full">
          {FavoriteCount}
        </span>
      )}
    </div>
  );
};

export default FavoritesCount;
