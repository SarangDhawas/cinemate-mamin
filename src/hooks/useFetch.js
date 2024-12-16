import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=47d0f9feaa800c13c8b454d6d79dbd86&query=${queryTerm}`

  // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=47d0f9feaa800c13c8b454d6d79dbd86query=${queryTerm}`;

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
