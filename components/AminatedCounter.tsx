import React from 'react'
import CountUp from 'react-countup'

const AminatedCounter = ({amount}: {amount:number}) => {
  return (
    <div className='w-full'>
      <CountUp 
        end={amount}
        decimal=','
        prefix='$'
      />
    </div>
  )
}

export default AminatedCounter
