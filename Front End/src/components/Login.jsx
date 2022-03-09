import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameErr, setUsernameErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)

  //   let registerUser = (user) => {
  //     axios.post('http://localhost:8080/Register', user).then(
  //       (response) => {
  //         alert(response.data)
  //       },
  //       (error) => {
  //         alert(error)
  //       }
  //     )
  //   }

  function usernameHandler(e) {
    let item = e.target.value
    setEmail(item)

    if (item.length < 3) {
      setUsernameErr(true)
    } else {
      setUsernameErr(false)
    }

    setUsername('item')
  }

  function passwordHandler(e) {
    let item = e.target.value
    if (item.length < 3) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
    setPassword('item')
  }

  function loginHandler(e) {
    if (password.length < 3 && username.length < 3) {
      alert('Invalid Data')
    } else if (username.length < 3) {
      alert('Invalid Email')
    } else if (password.length < 3) {
      alert('Invalid Password')
    }
    e.preventDefault()
  }

  /*------------------------------------------------------------------------*/
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function emailValidation(e) {
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if (regex.test(email)) {
      setMessage('')
    } else if (!regex.test(email) && email !== '') {
      setMessage('Email is not valid')
    } else {
      setMessage('')
    }
  }

  /*------------------------------------------------------------------------*/

  return (
    <div className='container-fluid bgimage'>
      <div
        className='row justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='col-lg-4 col-sm-8 bg-secondary bg-opacity-50 p-3 rounded  '>
          <form onSubmit={loginHandler}>
            <div>
              <h3 className='text-center text-white'>STUDENT LOGIN</h3>
            </div>
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='Enter Email'
                value={email}
                onChange={usernameHandler}
              />
              {usernameErr ? (
                <div class='validation'>
                  Enter email with minimum 8 characters
                </div>
              ) : null}
              <div class='validation'>{message}</div>
            </div>
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='password'
                placeholder='Enter Password'
                onChange={passwordHandler}
              />
              {passwordErr ? (
                <div class='validation'>
                  Enter Password with minimum 3 characters
                </div>
              ) : null}
            </div>
            <div className='mb-1'>
              <center>
                <Link to='' className='text-light'>
                  <button
                    type='submit'
                    class='btn btn-warning btn-lg w-75'
                    onClick={emailValidation}
                  >
                    LOGIN
                  </button>
                </Link>
              </center>
            </div>
            <div className='text-center'>
              <Link to='/Register' className='text-light'>
                New to Learning Pie? Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
