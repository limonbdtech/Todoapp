import styled from "styled-components";

const Style = styled.div`
background-color: gray;
padding: 3px 10px;

`

const Label = styled.label`
background-color:gray;
color: white;
display: block;
text-align: left;
padding: 2px 0;
padding-left: 4px;
font-size: 1.2rem;
`

const Input = styled.input`
width: 100%;
background-color: white;
padding:3px 5px;
outline: none;
border-radius: 10px;
padding-left: 10px;
    font-size: 20px;
&:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`

const Btn = styled.input`
padding: 5px 15px;
border-radius:10px;
color: white;
background-color: #fc894d;
outline: none;
cursor: pointer;
border: none;

&:hover{
    border-bottom: 1px solid wheat;
}
&:active{
    box-shadow: 2px 2px 5px #dbd9d7;
    background-color: transparent;

   
    
}
`

const Form = styled.form`
display: flex;
justify-content: space-between;
padding: 5px 10px;
align-items: center;
background-color: gray;
margin-bottom:10px ;

`
let BoxStyle =styled.div`
display: flex;
flex-direction: row;

@media (max-width: 800px) {
   flex-direction: column;
    }
`

export {Style,Label,Input,Btn,Form,BoxStyle}
    

