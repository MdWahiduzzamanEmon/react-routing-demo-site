import React from 'react';
import error from '../../image/404.svg'
import {Button
} from "react-bootstrap"
import { Link } from 'react-router-dom';
const Error = () => {
    return (
      <div className="text-center my-5 py-5 d-flex flex-column">
        <div>
          <img src={error} alt="" className="img-fluid" />
        </div>
        <Link to="/home">
          <Button variant="outline-warning text-dark w-25 mx-auto mt-5">
            {" "}
            Back to Home{" "}
          </Button>
        </Link>
      </div>
    );
};

export default Error;