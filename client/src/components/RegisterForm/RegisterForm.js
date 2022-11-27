import "./RegisterForm.css"

function RegisterForm() {
    return (
   
        <div className="register-container">
          <h1 className="register-title">GATA STORE</h1>
          <input
            type="text" name="name"
            placeholder="Name"
            className="register-input"
          />
             <input
            type="price" name="name"
            placeholder="Price"
            className="register-input"
          />
             <input
            type="category" name="Category"
            placeholder="Category"
            className="register-input"
          />
          <button 
          className="register-button">Register</button>
        </div>
      
    );
  }
  
  export default RegisterForm;