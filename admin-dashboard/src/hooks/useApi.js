import React from "react";

const useApi = (apiFunc) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const request = async (...args) => {
    setLoading(true);
    const { data, ok } = await apiFunc(...args);
    setError(false);

    if (!ok) return setError(true);

    setLoading(false);
    setData(data);
  };
  return { data, error, loading, request };
};

export default useApi;
