import React, { useState } from "react";
import "./Form.css";

function Form() {
  // owner object local state
  const [owner, setOwner] = useState({
    owner: "",
    description: "",
  });

  // handle owner change
  const handleOwnerChange = (e) => {
    const updatedOwner = { ...owner }; // spread cloned object
    updatedOwner[e.target.name] = e.target.value; // update value
    setOwner(updatedOwner); // set owner state
  };

  const blankCat = { name: "", age: "" }; // blank cat object
  const [cats, setCats] = useState([{ ...blankCat }]); // cat array local state

  // add cat input function
  const addCat = () => {
    setCats([...cats, { ...blankCat }]); // spread cat state, add blank cat
  };

  // remove cat input function
  const removeCat = (i) => {
    let updatedCats = [...cats]; // spread cloned array
    updatedCats.splice(i, 1); // splice 1 cat object on index
    setCats(updatedCats); // set cat state
  };

  // handle change for cat inputs
  const handleCatChange = (e) => {
    const updatedCats = [...cats];
    // dataset i for index, classname for key, value for value
    updatedCats[e.target.dataset.i][e.target.className] = e.target.value;
    setCats(updatedCats); // set cat state
  };

  // reload prevention and submission logs
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(owner);
    console.log(cats);
  };

  // return for dynamic form
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
        {cats.map((cat, i) => {
          const catId = `cat-${i}`;
          const ageId = `age-${i}`;
          return (
            <div key={i}>
              <label htmlFor={catId}>Cat</label>
              <input
                type="text"
                name={catId}
                data-i={i}
                id={catId}
                className="name"
                value={cats[i].name}
                onChange={handleCatChange}
              />
              <label htmlFor={ageId}>Age</label>
              <input
                type="text"
                name={ageId}
                data-i={i}
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
