import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const user = [
    {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tags:'Satisfied'
  },
  {
    img: '',
    intro: '',
    tags:'Underserved'
  },
  {
    img: '',
    intro: '',
    tags:'Underbanked'
  }
  ]

  return (

    <div>
      <Section1 />
    </div>
  )
}

export default App
