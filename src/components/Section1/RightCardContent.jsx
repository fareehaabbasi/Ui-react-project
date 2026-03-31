import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold'>1</h2>
        <div>
          <p className='text-sm leading-normal text-white mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe excepturi beatae, adipisci nostrum repellendus dolor?</p>
          <div className='flex justify-between'>
            <button className='bg-blue-800 text-white font-medium px-8 py-2 text-sm rounded-full '>Satisfied</button>
            <button className='bg-blue-800 text-white font-medium px-3 py-2 text-sm rounded-full'><ArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
