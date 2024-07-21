import React from 'react'
import ContactRegister from './components/ContactRegister'
import Footer from './components/Footer'
import LoginForm from './components/AcademyPage/LoginForm'

function Registeration() {
  return (
<>
<ContactRegister />
    <LoginForm state={'registeration'}/>
    <Footer/> 
</> 
)
}

export default Registeration