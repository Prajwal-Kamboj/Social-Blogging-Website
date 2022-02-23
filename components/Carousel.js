import React, { useEffect } from 'react';
import { useState } from 'react';


const items = [ 
    {
        heading : 'I am item one',
        description: ' Hello, please check out item 1'
    },
    {
        heading : 'I am item 2',
        description: ' Hello, please check out item 2'
    },
    {
        heading : 'I am item 3',
        description: ' Hello, please check out item 3'
    },
    {
        heading : 'I am item 4',
        description: ' Hello, please check out item 4'
    },
    {
        heading : 'I am item 5',
        description: ' Hello, please check out item 5'
    },
]


const Carousel  = () =>{

    const [state, setState] = useState(0);

    useEffect(()=>{
        setInterval(() => {
            console.log(state)
            
        }, 2000);

    },[])

    const increment = ()=>{
        if(state!= items.length-1){
            setState(state+1)

        }else{
            setState(0)
        }
    }
    const decrement = ()=>{
        if(state!=0){
            setState(state-1)

        }else{
            setState(items.length-1)
        }
    }
    return(
        <>
        <div className='cara-container'>

                    <div className='card-1'>
                    {items[state].heading}
                    </div>
                    <p className='desc'> {items[state].description}</p>

            <button className='plus' onClick={()=>increment()}>+</button>
            <button className='minus' onClick={()=>decrement()}>-</button>
        </div>
        
        </>
    )
}

export default Carousel;