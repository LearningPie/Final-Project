import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  let [name, setname] = useState('')
  let [mailID, setMailID] = useState('')
  let [phoneno, setPhoneno] = useState('')
  let [password, setPassword] = useState('')
  let [username, setUsername] = useState('')
  let [usecurityQues, setUsecurityQues] = useState('')
  let [usecurityAns, setUsecurityAns] = useState('')

  let usecurityquesinp = (e) => setUsecurityQues(e.target.value)
  let usecurityansinp = (e) => setUsecurityAns(e.target.value)

  let [nameerr, setnameerr] = useState(false)
  let [mailIDerr, setMailIDerr] = useState(false)
  let [phonenoerr, setPhonenoerr] = useState(false)
  let [passworderr, setPassworderr] = useState(false)
  let [usernameerr, setUsernameerr] = useState('')
  let [esecurityQues, setEsecurityQues] = useState()
  let [esecurityAns, setEsecurityAns] = useState()

  let user = {
    name: name,
    email: mailID,
    userName: username,
    password: password,
    phoneNo: phoneno,
    securityQuestion: usecurityQues,
    securityAnswer: usecurityAns,
  }

  let registerUser = (user) => {
    axios.post('http://localhost:8080/Register', user).then(
      (response) => {
        alert(response.data)
      },
      (error) => {
        alert(error)
      }
    )
  }
  function clearErrors() {
    document.getElementById('securityQues').classList.remove('is-invalid')
    setEsecurityQues('')

    document.getElementById('securityAns').classList.remove('is-invalid')
    setEsecurityAns('')
  }

  function nameHandler(e) {
    let item = e.target.value

    if (item.length < 3) {
      setnameerr(true)
    } else {
      setnameerr(false)
    }
    setname(item)
  }

  function mailHandler(e) {
    let item = e.target.value
    setEmail(item)

    if (item.length < 8) {
      setMailIDerr(true)
    } else {
      setMailIDerr(false)
    }
    setMailID(item)
  }

  function phonenoHandler(e) {
    let item = e.target.value

    if (item.length !== 10) {
      setPhonenoerr(true)
    } else {
      setPhonenoerr(false)
    }
    setPhoneno(item)
  }

  function passwordHandler(e) {
    let item = e.target.value

    if (item.length < 3) {
      setPassworderr(true)
    } else {
      setPassworderr(false)
    }
    setPassword(item)
  }

  function usernameHandler(e) {
    let item = e.target.value

    if (item.length < 3) {
      setUsernameerr(true)
    } else {
      setUsernameerr(false)
    }
    setUsername(item)
  }

  /*---------------------------------------------------------------------*/

  let [email, setEmail] = useState('')
  let [message, setMessage] = useState('')

  function emailValidation(e) {
    let regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if (regex.test(email)) {
      setMessage('')
    } else if (!regex.test(email) && email !== '') {
      setMessage('Email is not valid')
    }
    setMessage('')
  }

  return (
    <div className='container-fluid bgimage'>
      <div
        className='row justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='col-lg-4 col-sm-8 bg-dark bg-opacity-50 p-3 rounded '>
          <form>
            <div>
              <h3 className='text-center  text-white'>REGISTRATION HERE</h3>
            </div>
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='Enter Name'
                onChange={nameHandler}
              />
              {nameerr ? (
                <div class='validation'>
                  Name should be minimum of 3 characters
                </div>
              ) : null}
            </div>
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='Enter Email'
                onChange={mailHandler}
              />
              {mailIDerr ? (
                <div class='validation'>
                  MailId should be minimum of 8 characters
                </div>
              ) : null}
              <div class='validation'>{message}</div>
            </div>
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='Enter Phone No'
                onChange={phonenoHandler}
              />
              {phonenoerr ? (
                <div class='validation'>Name should be of 10 digits</div>
              ) : null}
            </div>
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='Enter User Name'
                onChange={usernameHandler}
              />
            </div>
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='Enter Password'
                onChange={passwordHandler}
              />
              {passworderr ? (
                <div class='validation'>
                  MailId should be minimum of 3 characters
                </div>
              ) : null}
            </div>

            {/* 
            <div className='mb-1'>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='Enter  '
                onChange={pincodeHandler}
              />
            </div> */}

            <div className='mb-1'>
              {/* <label for='securityQues' className='form-label fs-5'>
                Security Question
              </label> */}
              <select
                id='securityQues'
                className='form-select'
                name='securityQues'
                onChange={usecurityquesinp}
                onFocus={clearErrors}
                value={usecurityQues}
                required
              >
                <option selected>Select Security Question</option>
                <option value='Which was your first vehicle?'>
                  Which was your first vehicle?
                </option>
                <option value='Which is your favourite color?'>
                  Which is your favourite color?
                </option>
                <option value='Which was your first school?'>
                  Which was your first school?
                </option>
              </select>
              <div class='invalid-feedback fs-6 fw-bold'>{esecurityQues}</div>
            </div>

            <div className='mb-1'>
              {/* <label for='securityAnswer' className='form-label fs-5'>
                Your answer
              </label> */}
              <input
                type='text'
                className='form-control'
                id='securityAns'
                name='securityAns'
                placeholder='Remember this for forget password'
                onChange={usecurityansinp}
                onFocus={clearErrors}
                value={usecurityAns}
                required
              />
              <div class='invalid-feedback fs-6 fw-bold'>{esecurityAns}</div>
            </div>

            <div className='mb-1 p-3 justify-content-center'>
              <center>
                <button
                  onSubmit={emailValidation}
                  type='submit'
                  class='btn btn-warning btn-lg w-75'
                  onClick={registerUser()}
                >
                  REGISTER
                </button>
              </center>
            </div>

            <div className='text-center'>
              <Link to='/Login' className='text-light'>
                Existing User? LogIn
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
