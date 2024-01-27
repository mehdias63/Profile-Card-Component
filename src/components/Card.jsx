import React from 'react'
import State from './State'

export default function Card() {
  return (
        <div className='flex flex-col justify-center items-center relative bg-white rounded-xl'>
        <img src='/images/bg-pattern-card.svg' alt="Background" className='rounded-t-xl' />
        <img src='/images/image-victor.jpg' className='mx-auto -mt-[3rem] h-24 rounded-full border-[5px] border-white' alt="Avatar" />
        <div className='border-gray-500 border-b flex flex-col items-center w-80'>
        <div className='flex gap-6'>
        <h1>Victor Crest</h1>
        <p>26</p>
        </div>
        <p>London</p>
        </div>
        <div className='flex gap-8 items-center'>
        <State title="80K" text="Followers"/>
        <State title="803K" text="Likes"/>
        <State title="1.4K" text="Photos"/>
        </div>
        </div>
  )
}
