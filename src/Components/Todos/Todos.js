import React from 'react';
import { Card, Col, Button } from "react-bootstrap";
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import img from '../../image/600px-Oikya_Front_Logo.png'

const Todos = (props) => {
  const { id, title } = props.todo;
  /* const history=useHistory()
    const handleToDetails = () => {
        history.push(`/details/${id}`);
    } */

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top w-25 mx-auto" src={img} />
          <Card.Body>
            <Card.Title>{title.toUpperCase()}</Card.Title>
            <Card.Text>
              <h4>ID: {id}</h4>
            </Card.Text>
          </Card.Body>
          <Link to={`/details/${id}`} className="mb-4">
            <Button variant="outline-warning text-dark text-uppercase fw-bold">
              Details
            </Button>
          </Link>
          {/* <Button
            onClick={handleToDetails}
            variant="outline-warning text-dark text-uppercase fw-bold"
          >
            Details
          </Button> */}
        </Card>
      </Col>
    </div>
  );
};

export default Todos;