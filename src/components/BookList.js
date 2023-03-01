import { Link } from "react-router-dom";

const BookList = ({ book, handleDelete }) => {
  let bn;

  if (book.bookname.length >= 10) {
    bn = <h1>📗{book.bookname.slice(0, 10)}...</h1>;
  } else {
    bn = <h1>📗{book.bookname}</h1>;
  }

  return (
    <div className='book-list'>
      <Link to={`/books/${book.id}`}>
        <strong>Book Name:</strong>
        {bn}
        <strong>✍️Author:</strong>
        <p>{book.author}</p>
        <strong>💵Price:</strong>
        <p>{book.price}</p>
      </Link>
    </div>
  );
};

export default BookList;
