import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'



function Counter() {
  const[amount,setAmount]=useState("")
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()
  const handleincrementByAmount=()=>{
  if(amount){
    dispatch(incrementByAmount(parseInt(amount)))
  }
  else{
    alert("please enter the value")
  }
}
  return (
    <div>
          <h1 className='text-center'>Counter App</h1>
        <div className='text-white text-center p-5 d-flex align-items-center justify-content-counter w-100 flex-column' style={{minHeight:'100vh',backgroundColor:'black'}}>
            <div className=' mt-5  border rounded border-white p-5'>
              <h1>{count}</h1>
              <div className='mt-5 d-flex justify-content-around align-items-center'>
                <button onClick={()=>dispatch(increment())} className='btn btn-warning'>Increment</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                <button  onClick={()=>dispatch(decrement())}  className='btn btn-success'>Decrement</button>
              </div>
              <div className='mt-5 d-flex justify-content-center'>
                  <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control w-50' placeholder='Enter the Value'/>
                  <button onClick={handleincrementByAmount} className='btn btn-primary ms-3'>Increment By Account</button>
              </div>
                
            </div>

        </div>
    </div>
  )
}

export default Counter