import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [owner, setOwner] = useState({
    owner: "",
    description: "",
  });
  const handleOwnerChange = (e) =>
    setOwner({
      ...owner,
      [e.target.name]: [e.target.value],
    });

  const blankCat = { name: "", age: "" };
  const [cats, setCats] = useState([{ ...blankCat }]);

  const addCat = () => {
    setCats([...cats, { ...blankCat }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          name="owner"
          id="owner"
          value={owner.owner}
          onChange={handleOwnerChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={owner.description}
          onChange={handleOwnerChange}
        />
        <br />
        <button onClick={addCat}>Add New Cat</button>
        {cats.map((val, i) => {
          const catId = `cat-${i}`;
          const ageId = `age-${i}`;
          return (
            <div key={i}>
              <label htmlFor={catId}>{`Cat #${i + 1}`}</label>
              <input
                type="text"
                name={catId}
                data-id={i}
                id={catId}
                className="name"
              />
              <label htmlFor={ageId}>Age</label>
              <input
                type="text"
                name={ageId}
                data-id={i}
                id={ageId}
                className="age"
              />
            </div>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
