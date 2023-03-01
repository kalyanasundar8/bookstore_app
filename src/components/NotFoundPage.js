import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='notfound'>
      <h1>404 Page</h1>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
