import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

function Tag({Login, error}){
  // const [details, setDetails] = useState({email:"", password:""});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    const data = await response.json()

    console.log(data)
    // console.log(email, password)
  }

  return(
    <>
    </>
  )
}

export default Tag