import React, { useState } from 'react';

import {Input,Btn,Label,Form,BoxStyle,Style} from './Input'

let obj = {
    title:'',
    discrip:''
}
const Inputall = ({getdata}) => {
    let [data,setdata] = useState({...obj})
    let {title,discrip} = data;
    
    let onhandle = (e)=>{
        setdata({
            ...data,
            [e.target.name] :e.target.value
        })
    }
    
    let handlesubmit =(e)=>{
        e.preventDefault();
        if(data.discrip === "" || data.title===""){
            
            alert(`please fill in the input fild`)
        }else{
            getdata(data)
        }
     
    }
    return (
        <div>
            <Form onSubmit={handlesubmit}>
                <BoxStyle>
               <Style>
               <Label>Title:</Label>
                <Input type="text" name="title" value={title} onChange={onhandle}/>
               </Style>

               <Style>
                
               <Label>Discription:</Label>
                <Input type="text" name="discrip" value={discrip} onChange={onhandle}/>
               </Style>
            
                </BoxStyle>
                <Btn type="submit" value="add"/>
            </Form>
        </div>
    );
}

export default Inputall;