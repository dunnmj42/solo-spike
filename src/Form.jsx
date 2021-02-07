import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [owner, setOwner] = useState({
    owner: "",
    description: "",
  });
  const handleOwnerChange = (e) => {
    const updatedOwner = {...owner};
    updatedOwner[e.target.name] = e.target.value;
    setOwner(updatedOwner);
  };

  const blankCat = { name: "", age: "" };
  const [cats, setCats] = useState([{ ...blankCat }]);

  const addCat = () => {
    setCats([...cats, { ...blankCat }]);
  };

  const removeCat = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
  }

  const handleCatChange = (e) => {
    const updatedCats = [...cats];
    updatedCats[e.target.dataset.id][e.target.className] = e.target.value;
    setCats(updatedCats);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(owner)
    console.log(cats)
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
              <label htmlFor={catId}>Cat</label>
              <input
                type="text"
                name={catId}
                data-id={i}
                id={catId}
                className="name"
                value={cats[i].name}
                onChange={handleCatChange}
              />
              <label htmlFor={ageId}>Age</label>
              <input
                type="text"
                name={ageId}
                data-id={i}
                id={ageId}
                className="age"
                value={cats[i].age}
                onChange={handleCatChange}
              />
              <button onClick={() => removeCat(i)}>Remove</button>
            </div>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
