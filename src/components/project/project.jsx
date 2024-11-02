import React from 'react'

export const Project = ({ title, description, image }) => {
  return (
    <div className="bg-white/20 border border-gray-300 p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-60 object-cover mb-4" />
      <h1 className="text-2xl font-bold text-green-900 mb-2">{title}</h1>
      <p className="text-green-800 mb-4">{description}</p>
      <button className="px-8 py-3 bg-pink-400 text-white shadow-lg font-bold hover:bg-pink-400/80 hover:shadow-l transition-transform transform hover:-translate-y-1 active:translate-y-0 ">
        Live
      </button>
    </div>
  )
}
