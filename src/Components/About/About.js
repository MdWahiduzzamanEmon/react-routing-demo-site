import React, { useContext } from 'react';
import { MyContext } from '../../App';

const About = () => {
    const [text] = useContext(MyContext);
    return (
      <div className="text-center my-5 py-5">
        <h1>Coming soon</h1>
        <h2 className="text-warning">{text.text}</h2>
      </div>
    );
};

export default About;