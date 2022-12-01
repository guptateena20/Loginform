import React, { useState } from 'react'
import { MdHomeWork } from "react-icons/md"
import "./loginform.css"

const Loginform = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !pass) {
      alert("All fields are required");
    }
    else if (pass.length < 8) {
      alert("Password must be of 8 characters or more")
    }
    else {
      alert("Login successfully");
    }
  }
  return (
    <>
      <div className="loginform">
        <div className='form'>

          <div className='form-container'>
            <h1>Welcome</h1>
            <p className='kunnga'><MdHomeWork /> KUNNGA</p>

            <form>
              <input type="name" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} /><br />
              <input type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
              <p>Forgot Password?</p>


              <button className='login-btn' onClick={handleSubmit}>LOGIN</button>
              <br />
              <button className='hover-btn'>Hover Button</button>
            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default Loginform