
import React,{useState} from 'react';


const Square = () => {
    const [square, setSquare] = useState(null)
   
    const handleClick = () =>{
        console.log('Button Clicked!')
    }
    return (
        <div className='box'>
            <div className='square'></div>
            <div className='square2'></div>
             <div className='square3'></div>
            <button onClick={handleClick}>Click me</button>        
        </div>
    );
};

export default Square;