import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-10 pt-2 flex gap-10 items-center h-[90vh] px-16'>
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content
