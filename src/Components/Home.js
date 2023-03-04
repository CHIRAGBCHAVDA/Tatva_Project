import React from 'react';
import Title from './Title';

function Home() {
    const title = 'Home';
    const description = 'This is Home Page of project';

  return (
    <div>
      <Title title={title} description={description} />
    </div>
  );
}

export default Home;