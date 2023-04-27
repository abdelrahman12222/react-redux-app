import React from 'react'

const Categcard = (props) => {

   

    return (
        <div 
          className={`bg-${props.color}-500 p-4 rounded-lg shadow-md cursor-pointer hover:bg-${props.color}-600`}
          onClick={props.onclick}
        >
        <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full bg-${props.color}-300 flex items-center justify-center`}>
          <i className={`text-white fas fa-${props.icon} fa-2x`} />
        </div>
        <div className="ml-4">
          <h1 className="text-white text-2xl font-semibold">{props.title}</h1>
        </div>
      </div>
      </div>
    )
  }
  
export default Categcard