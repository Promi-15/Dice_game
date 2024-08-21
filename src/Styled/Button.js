import styled from "styled-components";

export const Button = styled.button`

    padding:10px 18px;
    background: #000000;
    border-radius : 5px;
    color: white;
    min-width: 220px;
    border: none;
    font-size : 16px;
    transition : 0.4s  ease-in;
    cursor: pointer;
    &:hover{
        background-color : #575555;
        transition : 0.3s  ease-in;
    }

`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
 &:hover{
        background-color : black;
        transition : 0.3s  ease-in;
        color: white;
    }
   
`;