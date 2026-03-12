import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = () => {
  return (
    <div className='h-full w-60 bg-amber-900 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute top-0 left-0 h-full w-full bg-amber-600 p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold'>1</h2>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe excepturi beatae, adipisci nostrum repellendus dolor?</p>
          <div>
            <button>Satisfied</button>
            
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard 
