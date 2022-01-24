import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

const Loading = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  return (
    <>
      {loading && <div>Загрузка...</div>}
      <div>{data && <pre>{JSON.stringify(data)}</pre>}</div>
    </>
  );
};

export default Loading;
