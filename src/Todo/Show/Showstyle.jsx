import styled from "styled-components";

const Showstyle = styled.div`

background-color: gray;
color: white;
padding: 10px 15px;
margin-top: 6px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Title = styled.h1`
 padding-bottom: 5px;

 font-size: 25px;
 font-family: Arial, Helvetica, sans-serif;
 @media (max-width: 800px) {
    padding-left: 8px;
    }
`

const Pera = styled.p`
font-size:18px;
padding: 3px 0;
@media (max-width: 800px) {
    padding-left: 8px;
    }
`



const Button = styled.button`
background-color: white;
color: gray;
padding: 3px 10px;
border-radius: 15px;
margin-right: 20px;
border: none;

outline: none;
cursor: pointer;
&:hover{
   border-bottom: 1px solid tomato;
}
&:active{
    box-shadow: 2px 2px 5px #f5efeb; 
    background-color: transparent;
    color: white;
}

`


export {Showstyle,Button,Title,Pera}
