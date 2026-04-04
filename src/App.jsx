import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const user = [
    {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color:'blue',
    tags:'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1758989388581-4cc5adbff544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBibHVyfGVufDB8fDB8fHww',
    intro: '',
    color:'purple',
    tags:'Underserved'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    color:'black',
    tags:'ForeignWorkers'
  },
  {
    img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    color:'lightslategray',
    tags:'FinancialInclusion'
  },
  {
    img: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    intro: '',
    color:'orange',
    tags:'Teamwork'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww',
    intro: '',
    color:'cyan',
    tags:'RemoteWork'
  },
  ]

  return (

    <div>
      <Section1 user={user} />
    </div>
  )
}

export default App
