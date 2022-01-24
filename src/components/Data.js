import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const Data = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  return (
    <>
      <div>{data && <pre>{JSON.stringify(data)}</pre>}</div>
    </>
  );
};

export default Data;
