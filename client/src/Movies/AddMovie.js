import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const startState = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

function UpdateForm() {
  const [input, setInput] = useState(startState);
  const { id } = useParams();
  const { push } = useHistory();

  const change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, input)
      .then((res) => {
        setInput(res.data);
        push(`/`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="saved-list">
      <form onSubmit={submit}>
        <input name="title" value={input.title} onChange={change} type="text" />
        <input
          name="director"
          value={input.director}
          onChange={change}
          type="text"
        />
        <input
          name="metascore"
          value={input.metascore}
          onChange={change}
          type="text"
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default UpdateForm;
