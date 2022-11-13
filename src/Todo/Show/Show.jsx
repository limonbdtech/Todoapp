import React from 'react';

import { Showstyle, Btn,Pera,Title } from './Showstyle';

const Show = ({show,getid}) => {
   let onRemove = ()=>{
    show.map((todo)=> getid( todo.id))
   } 

    return (
        <>
     {show.map((item)=>{
        return <Showstyle key={item.id} >
               <div>
                 <Title>{item.values.title}</Title>
                 <Pera>{item.values.discrip}</Pera>
                
                 </div>
                 <Btn onClick={()=>getid(item.id)}>Remove</Btn>
        </Showstyle>
     })}

  
         </>
    
    );
}

export default Show;
