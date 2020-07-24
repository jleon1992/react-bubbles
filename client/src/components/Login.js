import React, {useState} from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const initialState = {
  username: '',
  password: ''
}
const Login = () => {
  const [formValues, setFormvalues] = useState(initialState)
  const {push} = useHistory()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route"

  const changeHandler = e => {
    const {name, value} = e.target
    setFormvalues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
   
    axios.post('http://localhost:5000/api/login', formValues)
    .then(res => {
    
      localStorage.setItem('token', res.data.payload)
      push('/protected')
      
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
    
      <form onSubmit={onSubmit}>
        <label>
          <b>Username: </b>
          <input 
          type='text'
          name='username'
          value={formValues.username}
          onChange={changeHandler}
          />
        </label>
        <label>
          <b>Password: </b>
          <input 
          type='password'
          name='password'
          value={formValues.password}
          onChange={changeHandler}
          />
        </label>
        <button>Login</button>          
      </form>
    </>
  );
};

export default Login;
