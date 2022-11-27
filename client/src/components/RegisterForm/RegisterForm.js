import React, {useState} from 'react';
import "./RegisterForm.css"

function RegisterForm() {

const [values, setValues] = useState();
console.log(values)

const handleAddValues = (value) => {
  setValues((prevValues) => ({
    ...prevValues,
    [value.target.name]: value.target.value,
  }));
};

    return (
   
        <div className="register-container">
          <h1 className="register-title">GATA STORE</h1>
          <input
            type="text" 
            name="name"
            placeholder="Name"
            className="register-input"
            onChange={handleAddValues}
          />
             <input
            type="price" 
            name="name"
            placeholder="Price"
            className="register-input"
          />
             <input
            type="category" 
            name="Category"
            placeholder="Category"
            className="register-input"
          />
          <button 
          className="register-button">Register</button>
        </div>
      
    );
  }
  
  export default RegisterForm;