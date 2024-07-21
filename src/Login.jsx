import React from 'react'
import ContactRegister from './components/ContactRegister'
import Footer from './components/Footer'
import LoginForm from './components/AcademyPage/LoginForm'

function Login() {
  return (
    <div>
              <ContactRegister />
              <LoginForm state={'login'}/>
              <Footer/>

    </div>
  )
}

export default Login