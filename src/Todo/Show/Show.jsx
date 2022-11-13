import React from 'react';

import { Showstyle, Button,Pera,Title } from './Showstyle';

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
                 <Button onClick={()=>getid(item.id)}>Remove</Button>
        </Showstyle>
     })}

  
         </>
    
    );
}

export default Show;
