
import styled from "styled-components";
export default function NumberSelector({selectedNumber,setSelectedNumber,error,setError}) {
    const arr = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }
   
    // console.log(selectedNumber)
  return (
      <NumberSelectorContainer>
          <p>{ error}</p>
          <div className="flex">
              {/* <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box> */}
          {
              arr.map((value, i) => (
                  <Box isSelected={
                      value === selectedNumber
                  } key={i} onClick={() =>numberSelectorHandler(value)}>{ value}</Box>
              ))
          }
          </div>
          <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
 .flex{
    display: flex;
    gap: 24px;
    
 }   
 p{
    font-size: 24px;
    font-weight: 700;

 }
`


const Box = styled.div`
height    :72px ;
width: 72px;
border: 1px solid black;
display : grid;
place-items:center;
font-size : 24px;
font-weight:700;
background-color : ${(props)=> props.isSelected ? 'black' : 'white'};
color : ${(props)=> (!props.isSelected ? 'black' : 'white')}

`
