import { useParams } from "react-router";

const Product = () => {
  const params = useParams();

  return <div>Product {params.id}</div>;
};

export default Product;
