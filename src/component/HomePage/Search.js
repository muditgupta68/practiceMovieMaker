import React from "react";
import { GlobalContext } from "../../context";

const Search = () => {
  const { error, query, setQuery } = GlobalContext();

  return (
    <div className="mt-4 ">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="w-100 p-2 "
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search here..."
          />
        </form>
      </div>

      <div className="error-msg text-center text-danger mb-5">
        {error.status == true && error.msg}
      </div>
    </div>
  );
};

export default Search;
