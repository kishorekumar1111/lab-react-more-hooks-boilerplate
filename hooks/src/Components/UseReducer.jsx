import React, { useReducer, useState } from 'react'

const reduce=(state,action)=>{
  let {type} = action

  if(type=="increase"){
    return state+1
  }

  return
}

const intialvalue=0
const UseReducer = () => {

  const [count,dispatch]=useReducer(reduce,intialvalue)
  return (
    <div>
      <h1>U S E R E D U C E R </h1>
      <h3>{count}</h3>
      <button onClick={()=> dispatch({}) }>+</button>
       <button onClick={()=>{
        setCount(count-1)
      }}>-</button>
    </div>
  )
}

export default UseReducer