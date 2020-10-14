import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const startState = {
  title: "",
  director: "",
  metascore: "",
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
      .post(`http://localhost:5000/api/movies/${id}`, input)
      .then((res) => {
        setInput(res.data);
        push(`/movies/${id}`);
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
        <button>UPDATE</button>
      </form>
    </div>
  );
}

export default UpdateForm;
