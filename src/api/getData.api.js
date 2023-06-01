export const FetchData = () => {
  const data = fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
  ).then((response) => response.json());

  return data;
};

export const FetchSingle = (id) => {
  const single = fetch(`https://dummyjson.com/products/${id}`).then(
    (response) => response.json()
  );
  return single;
};
