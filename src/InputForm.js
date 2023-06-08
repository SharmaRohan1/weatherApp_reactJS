import { useState } from "react";

function InputForm({ onSubmit }) {
  const [term, setTerm] = useState("");

  function handleChange(event) {
    setTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Use this site to get your weather</div>
      <input type="text" value={term} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}

export default InputForm;
