import "../App.css";
import { useState } from "react";



const AppForm: React.FC = () => {
      
    const [role, setRole] = useState("role");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
    });

    const getIsFormValid = () => {
        return (
          firstName.trim() !== "" &&
          email.includes("@") &&
          password.value.length >= 8 &&
          role !== "role"
        );
      };

      const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({ value: "", isTouched: false });
        setRole("role");
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (getIsFormValid()) {
          alert("Account created!");
          clearForm();
        }
      };
    
      
    const PasswordErrorMessage = () => {
        return password.isTouched && password.value.length < 8 ? (
          <p className="FieldError">Password should have at least 8 characters</p>
        ) : null;
      };
    
      return (
        <div className="App">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <h2>Sign Up</h2>
              <div className="Field">
                <label>
                  First name <sup>*</sup>
                </label>
                <input 
                  placeholder="First name" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="Field">
                <label>Last name</label>
                <input 
                  placeholder="Last name" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="Field">
                <label>
                  Email address <sup>*</sup>
                </label>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="Field">
                <label>
                  Password <sup>*</sup>
                </label>
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password.value} 
                  onChange={(e) => setPassword({ value: e.target.value, isTouched: true })}
                />
                <PasswordErrorMessage />
              </div>
              <div className="Field">
                <label>
                  Role <sup>*</sup>
                </label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="role">Role</option>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <button type="submit" disabled={!getIsFormValid()}>
                Create account
              </button>
            </fieldset>
          </form>
        </div>
      );
    };
    
    export default AppForm;
    