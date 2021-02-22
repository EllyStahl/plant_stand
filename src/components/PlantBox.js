import React from 'react'

function PlantBox(props){
    return(
        <div className='plant'>
            <button onClick={()=>props.buy(props.name)}>buy</button>
            <button onClick={()=>props.sell(props.name)}>sell</button>
            <img src={props.image} className='plantImage'></img>
            <div>{props.count}</div>
        </div>
    )
}

export default PlantBox