import React, { useState } from 'react'
import Box from './components/Box'
import './App.css'



function Cart() {
  const [appState,setappState] = useState({
    activeObjects: null,
    objects: [{id:100},{id:200},{id:300},{id:400},{id:500},{id:600},{id:700},{id:800},{id:900}]
  })

  const [choice, setChoice] = useState({
    activeObjectsPayment:null,
    objects: [{id:10000},{id:10000},{id:10000},{id:10000}]
  })
  console.log(choice.activeObjectsPayment)

  function toggleActive(index) {
      setappState({...appState, 
        activeObjects:appState.objects[index]
      })
  }
  function toggleActivePayment(index){
    setChoice({
      ...choice,
      activeObjectsPayment:choice.objects[index]
    })
  }

  function toggleActiveStyle(index){
    if(appState.activeObjects === appState.objects[index] ){

      return 'box active'

    }else{
      return 'box '
    }
  }
  function toggleActiveStylePayment(index){
    if(choice.activeObjectsPayment === choice.objects[index] ){

      return 'payment active'

    }else{
      return 'payment'
    }
  }
  

  function setValue(index){
      setChoice({...choice,
         objects:[{id:(10000*appState.objects[index].id/100)},
         {id:(10000*appState.objects[index].id/100)+1000},
         {id:(10000*appState.objects[index].id/100)+2000},
         {id:(10000*appState.objects[index].id/100)+3000}]})
    
  }

    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                    {
                        appState.objects.map((object,index)=>(
                            <div 
                            key={index}
                            className={toggleActiveStyle(index)}
                            onClick={() => {
                              toggleActive(index)
                              setValue(index)
                            }}
                            >
                                {object.id}
                            </div>
                        ))   
                    }
                    </div>
                </div>
                <div className="col-lg-6" >
                  {
                    choice.objects.map((object,index) => (
                      <div 
                        className={toggleActiveStylePayment(index)}
                        onClick={() => toggleActivePayment(index)}
                      >
                        {object.id}
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    )
}

export default Cart