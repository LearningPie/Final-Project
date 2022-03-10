// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// export default function Register() {
//   let [name, setname] = useState('')
//   let [mailID, setMailID] = useState('')
//   let [phoneno, setPhoneno] = useState('')
//   let [password, setPassword] = useState('')
//   let [username, setUsername] = useState('')
//   let [usecurityQues, setUsecurityQues] = useState('')
//   let [usecurityAns, setUsecurityAns] = useState('')

//   let usecurityquesinp = (e) => setUsecurityQues(e.target.value)
//   let usecurityansinp = (e) => setUsecurityAns(e.target.value)

//   let [nameerr, setnameerr] = useState(false)
//   let [mailIDerr, setMailIDerr] = useState(false)
//   let [phonenoerr, setPhonenoerr] = useState(false)
//   let [passworderr, setPassworderr] = useState(false)
//   let [usernameerr, setUsernameerr] = useState('')
//   let [esecurityQues, setEsecurityQues] = useState()
//   let [esecurityAns, setEsecurityAns] = useState()

//   let user = {
//     name: name,
//     email: mailID,
//     userName: username,
//     password: password,
//     phoneNo: phoneno,
//     securityQuestion: usecurityQues,
//     securityAnswer: usecurityAns,
//   }

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
//   function clearErrors() {
//     document.getElementById('securityQues').classList.remove('is-invalid')
//     setEsecurityQues('')

//     document.getElementById('securityAns').classList.remove('is-invalid')
//     setEsecurityAns('')
//   }

//   function nameHandler(e) {
//     let item = e.target.value

//     if (item.length < 3) {
//       setnameerr(true)
//     } else {
//       setnameerr(false)
//     }
//     setname(item)
//   }

//   function mailHandler(e) {
//     let item = e.target.value
//     setEmail(item)

//     if (item.length < 8) {
//       setMailIDerr(true)
//     } else {
//       setMailIDerr(false)
//     }
//     setMailID(item)
//   }

//   function phonenoHandler(e) {
//     let item = e.target.value

//     if (item.length !== 10) {
//       setPhonenoerr(true)
//     } else {
//       setPhonenoerr(false)
//     }
//     setPhoneno(item)
//   }

//   function passwordHandler(e) {
//     let item = e.target.value

//     if (item.length < 3) {
//       setPassworderr(true)
//     } else {
//       setPassworderr(false)
//     }
//     setPassword(item)
//   }

//   function usernameHandler(e) {
//     let item = e.target.value

//     if (item.length < 3) {
//       setUsernameerr(true)
//     } else {
//       setUsernameerr(false)
//     }
//     setUsername(item)
//   }

//   /*---------------------------------------------------------------------*/

//   let [email, setEmail] = useState('')
//   let [message, setMessage] = useState('')

//   function emailValidation(e) {
//     let regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
//     if (regex.test(email)) {
//       setMessage('')
//     } else if (!regex.test(email) && email !== '') {
//       setMessage('Email is not valid')
//     }
//     setMessage('')
//   }

//   return (
//     <div className='container-fluid bgimage'>
//       <div
//         className='row justify-content-center align-items-center'
//         style={{ height: '100vh' }}
//       >
//         <div className='col-lg-4 col-sm-8 bg-dark bg-opacity-50 p-3 rounded '>
//           <form>
//             <div>
//               <h3 className='text-center  text-white'>REGISTRATION HERE</h3>
//             </div>
//             <div className='mb-1'>
//               <input
//                 className='form-control form-control-lg'
//                 type='text'
//                 placeholder='Enter Name'
//                 onChange={nameHandler}
//               />
//               {nameerr ? (
//                 <div class='validation'>
//                   Name should be minimum of 3 characters
//                 </div>
//               ) : null}
//             </div>
//             <div className='mb-1'>
//               <input
//                 className='form-control form-control-lg'
//                 type='text'
//                 placeholder='Enter Email'
//                 onChange={mailHandler}
//               />
//               {mailIDerr ? (
//                 <div class='validation'>
//                   MailId should be minimum of 8 characters
//                 </div>
//               ) : null}
//               <div class='validation'>{message}</div>
//             </div>
//             <div className='mb-1'>
//               <input
//                 className='form-control form-control-lg'
//                 type='text'
//                 placeholder='Enter Phone No'
//                 onChange={phonenoHandler}
//               />
//               {phonenoerr ? (
//                 <div class='validation'>Name should be of 10 digits</div>
//               ) : null}
//             </div>
//             <div className='mb-1'>
//               <input
//                 className='form-control form-control-lg'
//                 type='text'
//                 placeholder='Enter User Name'
//                 onChange={usernameHandler}
//               />
//             </div>
//             <div className='mb-1'>
//               <input
//                 className='form-control form-control-lg'
//                 type='text'
//                 placeholder='Enter Password'
//                 onChange={passwordHandler}
//               />
//               {passworderr ? (
//                 <div class='validation'>
//                   MailId should be minimum of 3 characters
//                 </div>
//               ) : null}
//             </div>

//             {/*
//             <div className='mb-1'>
//               <input
//                 className='form-control form-control-lg'
//                 type='text'
//                 placeholder='Enter  '
//                 onChange={pincodeHandler}
//               />
//             </div> */}

//             <div className='mb-1'>
//               {/* <label for='securityQues' className='form-label fs-5'>
//                 Security Question
//               </label> */}
//               <select
//                 id='securityQues'
//                 className='form-select'
//                 name='securityQues'
//                 onChange={usecurityquesinp}
//                 onFocus={clearErrors}
//                 value={usecurityQues}
//                 required
//               >
//                 <option selected>Select Security Question</option>
//                 <option value='Which was your first vehicle?'>
//                   Which was your first vehicle?
//                 </option>
//                 <option value='Which is your favourite color?'>
//                   Which is your favourite color?
//                 </option>
//                 <option value='Which was your first school?'>
//                   Which was your first school?
//                 </option>
//               </select>
//               <div class='invalid-feedback fs-6 fw-bold'>{esecurityQues}</div>
//             </div>

//             <div className='mb-1'>
//               {/* <label for='securityAnswer' className='form-label fs-5'>
//                 Your answer
//               </label> */}
//               <input
//                 type='text'
//                 className='form-control'
//                 id='securityAns'
//                 name='securityAns'
//                 placeholder='Remember this for forget password'
//                 onChange={usecurityansinp}
//                 onFocus={clearErrors}
//                 value={usecurityAns}
//                 required
//               />
//               <div class='invalid-feedback fs-6 fw-bold'>{esecurityAns}</div>
//             </div>

//             <div className='mb-1 p-3 justify-content-center'>
//               <center>
//                 <button
//                   onSubmit={emailValidation}
//                   type='submit'
//                   class='btn btn-warning btn-lg w-75'
//                   onClick={registerUser()}
//                 >
//                   REGISTER
//                 </button>
//               </center>
//             </div>

//             <div className='text-center'>
//               <Link to='/Login' className='text-light'>
//                 Existing User? LogIn
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
/* **************************************************************************************************** */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2'
import base_url from '../api/bootapi.js'
import axios from 'axios'

function Register() {
  useEffect(() => {
    document.title = 'Register'
  }, [])

  let [uname, setUname] = useState('')
  let [userName, setUsername] = useState('')
  let [uphone, setUphone] = useState('')
  let [uemail, setUemail] = useState('')
  let [upassword, setUpassword] = useState('')
  let [uconpassword, setUconpassword] = useState('')
  let [usecurityQues, setUsecurityQues] = useState('')
  let [usecurityAns, setUsecurityAns] = useState('')

  let unameinp = (e) => setUname(e.target.value)
  let userNameinp = (e) => setUsername(e.target.value)
  let uphoneinp = (e) => setUphone(e.target.value)
  let uemailinp = (e) => setUemail(e.target.value)
  let upasswordinp = (e) => setUpassword(e.target.value)
  let uconpasswordinp = (e) => setUconpassword(e.target.value)
  let usecurityquesinp = (e) => setUsecurityQues(e.target.value)
  let usecurityansinp = (e) => setUsecurityAns(e.target.value)

  let user = {
    name: uname,
    email: uemail,
    userName: userName,
    password: upassword,
    phoneNo: uphone,
    securityQuestion: usecurityQues,
    securityAnswer: usecurityAns,
  }

  //Register data
  const registerUser = (data) => {
    axios.post(`${base_url}/register`, data).then(
      (response) => {
        swal
          .fire({
            icon: 'success',
            title: 'Hurreh!!!',
            text: 'You have registered to a great cause',
          })
          .then(function () {
            window.location = '/'
          })
        clearFields()
      },
      (error) => {
        console.log(error)
        swal.fire({
          icon: 'error',
          title: 'Enter UserName first',
          text: 'We need to check if the UserName is already registered or not',
        })
      }
    )
  }

  //Check Email
  const checkEmail = (data) => {
    axios.post(`${base_url}/findbyusername`, data).then(
      (response) => {
        console.log(response)
        if (response.data.length == 0) {
          registerUser(user)
          clearErrors()
          clearFields()
        } else {
          swal.fire({
            icon: 'error',
            title: 'Oh no!!!',
            text: 'UserName is already Registered',
          })
        }
      },
      (error) => {
        console.log(error)
        swal.fire({
          icon: 'error',
          title: 'Oh no!',
          text: 'Server is down',
        })
      }
    )
  }

  let [ename, setEname] = useState()
  let [eUname, seteUname] = useState()
  let [eemail, setEemail] = useState()
  let [ephone, setEphone] = useState()
  let [epassword, setEpassword] = useState()
  let [econpassword, setEconpassword] = useState()
  let [esecurityQues, setEsecurityQues] = useState()
  let [esecurityAns, setEsecurityAns] = useState()
  let [etnc, setEtnc] = useState()

  function clearErrors() {
    document.getElementById('name').classList.remove('is-invalid')
    setEname('')

    document.getElementById('uName').classList.remove('is-invalid')
    seteUname('')

    document.getElementById('phone').classList.remove('is-invalid')
    setEphone('')

    document.getElementById('email').classList.remove('is-invalid')
    setEemail('')

    document.getElementById('password').classList.remove('is-invalid')
    setEpassword('')

    document.getElementById('conpassword').classList.remove('is-invalid')
    setEconpassword('')

    document.getElementById('securityQues').classList.remove('is-invalid')
    setEsecurityQues('')

    document.getElementById('securityAns').classList.remove('is-invalid')
    setEsecurityAns('')

    document.getElementById('tnc').classList.remove('is-invalid')
    setEtnc('')
  }

  function clearFields() {
    setUname('')
    setUsername('')
    setUphone('')
    setUemail('')
    setUpassword('')
    setUconpassword('')
    setUsecurityQues('')
    setUsecurityAns('')
    document.getElementById('tnc').checked = false
  }

  let validate = () => {
    if (
      uname.trim() === '' ||
      userName.trim() === '' ||
      uphone.trim() === '' ||
      uemail.trim() === '' ||
      upassword.trim() === '' ||
      uconpassword.trim === '' ||
      usecurityQues.trim() === '' ||
      usecurityAns.trim() === ''
    ) {
      swal.fire('All fields are  required')
    } else if (
      uname.search(/^[a-zA-Z ]*$/) < 0 ||
      uname.length < 3 ||
      uname.length > 40
    ) {
      document.getElementById('name').classList.add('is-invalid')
      setEname(
        'Please enter characters only and must have length of minimum 3 and maximum 30'
      )
    } else if (userName === '') {
      document.getElementById('uName').classList.add('is-invalid')
      seteUname(
        'Please enter characters only and must have length of minimum 3 and maximum 30'
      )
    } else if (uphone === '' || uphone.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById('phone').classList.add('is-invalid')
      setEphone('Enter valid Mobile Number')
    } else if (
      uemail === '' ||
      uemail.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById('email').classList.add('is-invalid')
      setEemail('Enter valid Email ID')
    } else if (
      upassword === '' ||
      upassword.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      upassword.length < 6
    ) {
      document.getElementById('password').classList.add('is-invalid')
      setEpassword(
        'Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character'
      )
    } else if (upassword !== uconpassword) {
      document.getElementById('conpassword').classList.add('is-invalid')
      setEconpassword('Password mismatch.')
    } else if (usecurityAns.length <= 3 || usecurityAns.length > 40) {
      document.getElementById('securityAns').classList.add('is-invalid')
      setEsecurityAns('Enter Answer lenght above 2 or less than 40')
    } else if (document.getElementById('tnc').checked == false) {
      document.getElementById('tnc').classList.add('is-invalid')
      setEtnc('Please accept terms and conditions')
    } else {
      checkEmail(user)
    }
  }

  return (
    <div>
      <div className='vh-100 d-flex reg'>
        <div className='m-auto w-50 pt-2 ps-5 pe-5 pb-2  align-self-center text-white reg-form'>
          <h1 className='text-center fw-bold mb-3 bg-warning'>Learning Pie</h1>
          <h1 className='text-center display-4'>Register Here</h1>

          <form className='row g-3 mt-1'>
            <div className='col-md-6'>
              <label for='name' className='form-label fs-5'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                placeholder='Full name'
                onChange={unameinp}
                onFocus={clearErrors}
                value={uname}
                required
              />
              <div class='invalid-feedback fs-6 fw-bold'>{ename}</div>
            </div>

            <div className='col-md-6'>
              <label for='email' className='form-label fs-5'>
                Email-ID
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                placeholder='Eg:-abc@gmail.com'
                onChange={uemailinp}
                onFocus={clearErrors}
                value={uemail}
                required
              />
              <div class='invalid-feedback fs-6 fw-bold'>{eemail}</div>
            </div>

            <div className='col-md-6'>
              <label for='userName' className='form-label fs-5'>
                UserName
              </label>
              <input
                id='uName'
                name='uname'
                placeholder='Enter User Name'
                onChange={userNameinp}
                onFocus={clearErrors}
                value={userName}
                required
              />
              <div class='invalid-feedback fs-6 fw-bold'>{eUname}</div>
            </div>

            <div className='col-md-6'>
              <label for='phone' className='form-label fs-5'>
                Phone Number
              </label>
              <input
                type='text'
                className='form-control'
                name='phone'
                id='phone'
                placeholder='Without +91'
                onChange={uphoneinp}
                onFocus={clearErrors}
                value={uphone}
                required
              />
              <div class='invalid-feedback fs-6 fw-bold'>{ephone}</div>
            </div>

            <div className='col-md-6'>
              <label for='password' className='form-label fs-5'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                placeholder='Enter a strong password'
                onChange={upasswordinp}
                onFocus={clearErrors}
                value={upassword}
                required
              />
              <div class='invalid-feedback fs-6 fw-bold'>{epassword}</div>
            </div>
            <div className='col-md-6'>
              <label for='conpassword' className='form-label fs-5'>
                Confirm Password
              </label>
              <input
                type='password'
                className='form-control'
                id='conpassword'
                name='conpassword'
                placeholder='Confirm entered password'
                onChange={uconpasswordinp}
                onFocus={clearErrors}
                value={uconpassword}
                required
              />
              <div class='invalid-feedback fs-6 fw-bold'>{econpassword}</div>
            </div>

            <div className='col-md-6'>
              <label for='securityQues' className='form-label fs-5'>
                Security Question
              </label>
              <select
                id='securityQues'
                className='form-select'
                name='securityQues'
                onChange={usecurityquesinp}
                onFocus={clearErrors}
                value={usecurityQues}
                required
              >
                <option selected>Enter your Security Question </option>
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
            <div className='col-md-6'>
              <label for='securityAnswer' className='form-label fs-5'>
                Your answer
              </label>
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

            <div className='col-md-7 text-right mt-3'>
              <input
                type='checkbox'
                className='form-check-input'
                id='tnc'
                name='tnc'
                required
              />
              <label for='tnc' className='form-label fs-5'>
                Accept terms and conditions
              </label>
              <div class='invalid-feedback fs-6 fw-bold'>{etnc}</div>
            </div>
            <div className='col-md-5 text-left mt-3'>
              <Link
                to='/termsandconditions'
                href='#'
                className='text-decoration-none fs-5'
                id='tnc'
              >
                Terms and Conditions
              </Link>
            </div>
            <div className='col-md-12 text-center'>
              <h4 className='fs-4'>
                Already Registered?
                <Link to='/' href='login.html' className='text-decoration-none'>
                  Login here
                </Link>
              </h4>
            </div>

            <div className='col-md-12 text-center'>
              <input
                type='button'
                className='btn btn-lg btn-primary'
                value='Register'
                onClick={validate}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
