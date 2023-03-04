import React from 'react';
import Title from './Title';

function About() {
  const title = 'About';
  const description = 'Learn more about our company and our team!';

  return (
    <div>
      <Title title={title} description={description} />
    </div>
  );
}


export default About;



