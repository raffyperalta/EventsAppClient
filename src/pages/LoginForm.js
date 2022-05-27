import React, {useState, useRef} from 'react'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'

function LoginForm({Login, error}){
  // const [details, setDetails] = useState({email:"", password:""});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const errRef = useRef();
  
  const submitHandler = e => {
    e.preventDefault();
    login(email,password);
  }

  async function login(email, password){
    const response = await fetch('http://localhost:3001/users/login',{
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })

    const data = await response.json().then((data) => {
      if(data.statusCode == 401){
        setErrMessage(data.message)
      }
    })

    
  }

  return(
    <>
      <Form className='login-form' onSubmit={submitHandler}>
        <h1 className="font-weight-bold">Sign In</h1>
        <FormGroup>
          <p ref={errRef} className={ errMessage ? 'error' : ''}  aria-live="assertive">{errMessage}</p>
          <Label>Email</Label>
          <Input required type="email" placeholder="Email"  onChange={e=> setEmail(e.target.value)} value={email}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label> 
          <Input required type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password}/>
        </FormGroup> 
        <Button type='submit' className='btn-lg btn-dark btn-block'>Log in</Button>
        
      </Form>      
      <a href="/register">Register Here</a>
    </>
  )
}

export default LoginForm