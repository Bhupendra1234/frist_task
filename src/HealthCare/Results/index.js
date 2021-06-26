import React from 'react'
import Header from '../../Header'
import {Card } from 'antd'
const Result = (props)=>
{
     console.log(props.location.state.prediction_text)
     return (
          <div>
        <Header/>
          <Card  style={{marginTop:50}} className="text-center">
               <h1>{props.location.state.prediction_text}</h1>
          </Card>
          </div>
          )
}
export default Result