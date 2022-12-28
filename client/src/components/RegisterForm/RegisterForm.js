import React, { useState } from 'react';
import "./RegisterForm.css"

function RegisterForm() {

  const [values, setValues] = useState();


  const handleAddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values);
  }

  return (

    <div className="register-container">
      <h1 className="register-title">GATA</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="register-input"
        onChange={handleAddValues}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        className="register-input"
        onChange={handleAddValues}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        className="register-input"
        onChange={handleAddValues}
      />
      <button
        className="register-button"
        onClick={handleClickButton}>Register</button>
    </div>

  );
}

export default RegisterForm;