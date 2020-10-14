import React, { useState } from "react";

const startState = {
  title: "",
  director: "",
  metascore: "",
};

function UpdateForm() {
  const [input, setInput] = useState(startState);

  const change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="saved-list">
      <form>
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
      </form>
    </div>
  );
}

export default UpdateForm;
