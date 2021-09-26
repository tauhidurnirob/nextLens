import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);

  const request = async (...args) => {
    const { data } = await apiFunc(...args);

    setData(data);
  };
  return { data, request };
};
