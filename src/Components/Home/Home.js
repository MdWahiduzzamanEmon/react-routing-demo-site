import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Todos from '../Todos/Todos';

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/todos`;
      fetch(url)
        .then((res) => res.json())
          .then((data) =>setTodos(data.slice(0,30))

        );
    }, []);
    

    return (
      <div className="container text-center">
        <div>
          <InputGroup className="mb-3 mt-5 w-50 mx-auto">
            <FormControl
                        placeholder="Search By Id--"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                       
            />
          </InputGroup>
        </div>

        <Row xs={1} md={3} className="g-4 my-4">
          {todos?.map((todo) => (
            <Todos key={todo.id} todo={todo}></Todos>
          ))}
        </Row>
      </div>
    );
};

export default Home;