import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //reducer
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("avengers");
  const [error, setError] = useState({ status: false, msg: "" });
  const api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&s=${query}`;

  //action
  const getMovie = async () => {
    try {
      isLoading(true);
      const res = await fetch(api);
      const resData = await res.json();
      if (resData.Response === "True") {
        isLoading(false);
        setError({ status: false, msg: null });
        setData(resData.Search);
      } else {
        setError({ status: true, msg: resData.Error });
      }
      // console.log(resData);
      // console.log(data);
    } catch (error) {
      setError({ status: true, msg: error });
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(api);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [query, api]);

  return (
    <AppContext.Provider value={{ loading, data, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, GlobalContext, AppContext };
