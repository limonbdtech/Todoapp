import React, { useState } from 'react';
import {Todostyle,Header} from './Todostyle'
import Show from './Show/Show';
import { v4 as uuidv4} from 'uuid';
import InputAll from './Inputsection/Inputall'



const Todo = () => {
    let [show,setshow] = useState([])

   let getdata = (values) =>{
        setshow((previews)=>{
            return [...previews,{id:uuidv4(),values}]
        })
   }
    
   let getid =(id) =>{
    setshow( show.filter((item) => id !== item.id))
    
 }

 
    return (
        <Todostyle>
          <Header>Todo</Header>
            <InputAll getdata={getdata}/>
       
            <Show show={show} getid={getid}/>
        </Todostyle>
    );
}

export default Todo;
