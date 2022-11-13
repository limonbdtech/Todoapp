import styled from "styled-components";


const Todostyle = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 95%;
    }

`

const Header = styled.h1`
text-align: center;
color: orange;
font-size: 36px;
padding: 15px 0;

`

export  {Todostyle,Header};