import React, {useState, useRef} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function RegisterForm({Login, error}){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errMessage, setErrMessage] = useState('');
  const errRef = useRef();


  const submitHandler = e => {
    e.preventDefault();
    register(email,password);
  }

  async function register(email, password){
    if(password === confirmPassword){
      try{
        const response = await fetch('http://localhost:3001/users/register',{
          method: 'POST',
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            name, email,password
          })
        })

        const data = await response.json().then((data) => {
          if(data.statusCode == 409){
            setErrMessage(data.message)
          }
        })
      }catch(err){

      }
    }else{
      setErrMessage("Passwords do not match")
    }

  }

  return(
    <>
      <Form className='register-form' onSubmit={submitHandler}>
        <h1 className="font-weight-bold">Register</h1>
        <FormGroup>
          <p ref={errRef} className={ errMessage ? 'error' : ''}  aria-live="assertive">{errMessage}</p>
          <Label>Name</Label>
          <Input required type="text" placeholder="Name" onChange={e=> setName(e.target.value)} value={name}/>
        </FormGroup>
        <FormGroup></FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input required type="email" placeholder="Email"  onChange={e=> setEmail(e.target.value)} value={email}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input required type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password}/>
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input required type="password" placeholder="Confirm Password" onChange={e=> setConfirmPassword(e.target.value)} value={confirmPassword}/>
        </FormGroup>
        <Button type='submit' className='btn-lg btn-dark btn-block'>Register</Button>
      </Form>
      <a href='/login'>Click here to Login</a>
    </>   
  )
}

export default RegisterForm