import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-4 w-3/4 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
      {props.user.map(function(elem, idx) {
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tags={elem.tags} />;
      })}
    </div>
  )
}

export default RightContent
