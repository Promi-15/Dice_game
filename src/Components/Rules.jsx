import styled from "styled-components"

export default function Rules() {
  return (
    <RulesContainer>
          <h2>How To play</h2>
          <div className="text">
              <p>Select Any number</p>
              <p>Click On dice</p>
              <p>after click on  dice  if selected number is equal to dice number you will get same point as dice  if you get wrong guess then  2 point will be dedcuted </p>
          </div>
    </RulesContainer>
  )
}
const RulesContainer = styled.div`
background-color: #FBF1F1;
padding:20px;
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
    .text{
        margin-top: 24px;

    }
        
        h2{
            font-size: 24px;
            
        }
   

`