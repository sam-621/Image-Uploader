import React from 'react';

const App = () => {
  const { TEST } = process.env;
  return (
    <>
      <h1>{TEST}</h1>
    </>
  );
};

export default App;
