import React, { useState, useEffect } from 'react';

import axios from 'axios'

function Home(props) {

  const [login, setLogin] = useState({
    user: "",
    pass: ""
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [signup, setSignup] = useState({
    user: "",
    pass: ""
  })

  const [user, setUser] = useState([])


  const handleChange = e => {

    if (e.target.id == "login") {
      setLogin({
        ...login,
        [e.target.name]: e.target.value
      })

    }
    else {
      setSignup({
        ...signup,
        [e.target.name]: e.target.value
      })
    }

    console.log(login);

  }

  const loginSV = async () => {
    const res = await axios.post('http://localhost:8000/login', {
      user: login.user,
      pass: login.pass
    })

    alert(res.data.message)
    if (res.data.message == "success") {
      localStorage.setItem("data", res.data.user)
      props.history.push("/welcome")
    }
  }


  const signupSV = async () => {
    const res = await axios.post('http://localhost:8000/signup', {
      user: signup.user,
      pass: signup.pass
    })
    alert(res.data.message)
  }


  const getSV = async () => {
    const res = await axios.get('http://localhost:8000/user')
    setUser(res.data)

  }

  const fechData = () => {
    if (user.length == 0) {
      return (
        <>
          <h1>NULL</h1>
        </>
      )
    }
    else {
      return user.map(item => {

        return (
          <>
            <h1>{item.user}:{item.pass}</h1>

          </>
        )
      })
    }
  }


  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      props.history.push('/welcome')
    }
    else {
      getSV()
    }

  })

  // {e => setPassword(e.target.value)}
  return (
    <>
    <form onSubmit ={loginSV}>
      <input name="user" id="login" onChange={e => handleChange(e)} />
      <input name="pass" id="login" type="password" onChange={e => handleChange(e)} />
      {/* <button type="submit" onClick={setSignup}>login</button> */}
      <input type="submit" value="Submit" />

    </form>

      <hr />
      <input name="user" id="signup" onChange={e => handleChange(e)} />
      <input name="pass" id="signup" type="password" onChange={e => handleChange(e)} />
      <button type="submit" >signup</button>
      <hr />
      {fechData()}
    </>
  );
}

export default Home;
