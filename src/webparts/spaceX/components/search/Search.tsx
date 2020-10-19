import * as React from "react";
import { useState } from "react";

import "./styles.css";

export const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Ships" 
          value={text}
          onChange={(e) => onChange(e.target.value)}  
        />
      </form>
    </section>
  );
};
