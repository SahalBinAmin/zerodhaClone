import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container p-5 mb-5 border-bottom">
      <div className="row text-center">
        <h1 className="mt-5">404! Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <Link to={"/"}>
          <button className="btn btn-primary fs-3 "> Back To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
