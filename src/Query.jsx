import { useQuery } from "@tanstack/react-query";
import { FetchData, FetchSingle } from "./api/getData.api";

const Query = ({ id }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products", id],
    queryFn: () => FetchSingle(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, brand, category, images } = data;

  return (
    <div>
      <img src={images[2]} alt="" width={130} height={130} />
      <h2>{title}</h2>
      <p>{brand}</p>
      <p>{category}</p>
    </div>
  );
};

export default Query;
