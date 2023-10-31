import { useState } from "react";

export const SearchPage = () => {
  const [searchBy, setSearchBy] = useState("");

  const defineSearchCriteria = (e) => {
    setSearchBy(e.target.value);
  };

  const search = () => {
    console.log(searchBy);
  };
  return (
    <div>
      Search
      <form>
        <input type="text" onChange={defineSearchCriteria}></input>
      </form>
      <button onClick={() => search()}>Search</button>
    </div>
  );
};
