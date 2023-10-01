import { useParams } from "react-router";

const Product = () => {
  const params = useParams();
  console.log("Product.tsx / L5 -- params -->", params);

  return <div>Product {params.id}</div>;
};

export default Product;
