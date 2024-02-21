// import React from 'react'
// import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

// const Login  = () => (
//   <Segment placeholder>
//     <Grid columns={2} relaxed='very' stackable>
//       <Grid.Column>
//         <Form>
//           <Form.Input
//             icon='user'
//             iconPosition='left'
//             label='Username'
//             placeholder='Username'
//           />
//           <Form.Input
//             icon='lock'
//             iconPosition='left'
//             label='Password'
//             type='password'
//           />

//           <Button content='Login' primary />
//         </Form>
//       </Grid.Column>

//       <Grid.Column verticalAlign='middle'>
//         <a href='Signup'>
//         <Button content='Sign up' icon='signup' size='big' />
//         </a>
//       </Grid.Column>
//     </Grid>

//     <Divider vertical>Or</Divider>
//   </Segment>
// )

// export default Login 



import React,{useState} from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
import './Login.css';

export default function Login() {

  const history=useNavigate();


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/login",{
          email,password
        })
        .then(res=>{
          if(res.data == "exist"){
            history("/working",{state:{id:email}})
          }
          else if(res.data == "notexist"){
            alert("user not signed yet")
          }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    }
    catch(e){
        console.log(e);
    }
  }

  return (
    <div className='login'>
      <h1>Login</h1>

      
      <form action='POST'>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' name='' id='' />
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' name='' id=''/>
        <input type="submit" onClick={submit} value="Login" />

      </form>

      <br/>
      <p>Don't have an account?</p>
      <Link to="/signup">Signup</Link>
    </div>
  )
}
