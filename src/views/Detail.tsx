import { useParams } from "react-router-dom";
const Detail = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Detail;
