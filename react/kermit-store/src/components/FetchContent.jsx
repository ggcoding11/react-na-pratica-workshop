import React from "react";

const FetchContent = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <span className="text-xl">Loading...</span>
      ) : error ? (
        <span className="text-xl">Erro ao puxar os produtos da API!</span>
      ) : (
        children
      )}
    </>
  );
};

export default FetchContent;
