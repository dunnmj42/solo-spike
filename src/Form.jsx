import React, {useState} from 'react'
import './Form.css'

function Form() {

  const [cats, setCats] = useState([{name: "", age: ""}]);

  const addCat = (e) => {
    setCats([...cats, {name: "", age: ""}])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="owner">Owner</label>
        <input type="text" name="owner" id="owner"/>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description"/>
        <br/>
        <button onClick={addCat}>Add New Cat</button>
        {cats.map((val, i) => {
          let catId = `cat-${i}`, ageId = `age-${i}`
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
          )
        })}
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Form;