import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const { ToId } = useParams();
    const [data, setData] = useState({});
    const { userId, id, title, completed } = data;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${ToId}`)
          .then((res) => res.json())
          .then((data) => setData(data));
    },[])
    return (
      <div className="container">
        <section className="row py-5 my-5">
          <div className="details-section col-md-3">
            {completed === true ? (
              <img
                src="https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-1.jpg"
                className="w-25"
                alt=""
              />
            ) : (
              <img
                src="https://img.pikbest.com/png-images/qiantu/red-haired-cartoon-girl-wearing-a-red-suspender-dress-element_2547797.png!bw800"
                className="w-25"
                alt=""
              />
            )}
          </div>
          <div className="details-section col-md-3">User Id: {userId}</div>
          <div className="details-section col-md-3">Id: {id}</div>
          <div className="details-section col-md-3">Title: {title}</div>
        </section>
      </div>
    );
};

export default Details;