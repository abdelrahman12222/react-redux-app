import React from 'react'

const SliderCard = (props) => {
  return (
    <>

<div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row -mx-4">
    <div className="w-full lg:w-6/12 order-last lg:order-first px-4">
      <img className="w-full" src={props.image} alt="" />
    </div>
    <div className="w-full lg:w-6/12 px-4">
      <div className="flex flex-col h-full justify-center">
        <h1 className="text-green-600 text-2xl font-bold mb-4">{props.firsttitle}</h1>
        <h2 className="text-green-500 text-lg font-semibold mb-2">{props.secondtitle}</h2>
        <p className="text-gray-600">{props.details}</p>
      </div>
    </div>
  </div>
</div>
      </>  )
}

export default SliderCard