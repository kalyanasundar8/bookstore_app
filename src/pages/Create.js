import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [bookname, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const books = { bookname, author, price };

    setIsPending(true);

    fetch("http://localhost:8000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(books),
    }).then(() => {
      setBookName("");
      setAuthor("");
      setPrice("");
      console.log("New book added");
      setIsPending(false);
    });
  };

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <label>Book Name:</label>
        <input
          type='text'
          required
          value={bookname}
          onChange={(e) => setBookName(e.target.value)}
        />
        <label>Author:</label>
        <input
          type='text'
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Price:</label>
        <input
          type='number'
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {!isPending && <button>Submit</button>}
        {isPending && <button>Submiting...</button>}
      </form>
    </div>
  );
};

export default Create;
