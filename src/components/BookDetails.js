import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "../loader.svg";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, error } = useFetch(
    "http://localhost:8000/books/" + id
  );

  const handleDelete = () => {
    fetch("http://localhost:8000/books/" + data.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className='book-details'>
      {isPending && <img className='loader' src={Loader} alt=''></img>}
      {data && (
        <div className='details'>
          <div className='books-desc'>
            <h1>{data.bookname}</h1>
            <p className='author'>{data.author}</p>
            <p className='desc'>{data.description}</p>
            <p>{error}</p>
            <button onClick={handleDelete}>Delete book</button>
          </div>
          <img src={data.url} alt='Image not found'></img>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
