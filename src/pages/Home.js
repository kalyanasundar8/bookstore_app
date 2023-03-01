import BookList from "../components/BookList";
import Loader from "../../src/loader.svg";
import useFetch from "../components/useFetch";

const Home = () => {
  const { data, isPending, error, setData } = useFetch(
    "http://localhost:8000/books"
  );

  const handleDelete = (id) => {
    const newBooks = data.filter((book) => book.id !== id);
    setData(newBooks);
  };

  return (
    <div className='home'>
      {isPending && <img className='loader' src={Loader}></img>}
      {error && <p>{error}</p>}
      <div className='books'>
        {data &&
          data.map((book) => (
            <BookList key={book.id} book={book} handleDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
};

export default Home;
