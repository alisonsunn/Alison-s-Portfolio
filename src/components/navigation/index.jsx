"use client"
import React from 'react'
import { BtnList } from '@/app/data'
import NavButton from './NavButton'

export const Navigation = () => {

  const angleIncrement = 360 / BtnList.length
  return (
    <div className='fixed h-screen w-full flex items-center justify-center'>
      <div className='flex items-center justify-center hover:pause relative -top-10  text-purple-800 animate-spin-slow group'>
        {
          BtnList.map((btn, index) => {
            const angleRad = (index * angleIncrement * Math.PI) / 180
            const radius = 'calc(20vw - 1rem)'
            const x = `calc(${radius}*${Math.cos(angleRad)})`
            const y = `calc(${radius}*${Math.sin(angleRad)})`
            return <NavButton key={btn.label} x={x} y={y} {...btn} ></NavButton>
          })
        }
      </div>
    </div>

  )
}