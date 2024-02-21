// // Signup.js
// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle form submission (e.g., send data to a server)
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="signup-form-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;




import React,{useState} from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

export default function SignUp() {
  const history=useNavigate();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/signup",{
          name,email,password
        })
        .then(res=>{
            if(res.data=="exist"){
                alert("user already exits");
            }
            else if(res.data=="notexist"){
              history("/working",{state:{id:name}})
            }
          })
          .catch(e=>{
              alert("wrong details");
              console.log(e);
          })
    }
    catch(e){
        console.log(e);
    }
  }

  return (
    <div className='login'>
      <h1>SignUp</h1>
       
      <form action='POST'>
        <input type='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name' name='' id=''/>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' name='' id='' />
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' name='' id=''/>
        <input type="submit" onClick={submit} value="SignUp"/>

      </form>

      <br/>
      <p>Already have an account?</p>
      <Link to="/login">Login Page</Link>
    </div>
  )
}
