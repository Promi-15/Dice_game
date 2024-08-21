
import styled from "styled-components"


export default function RoleDice({currentDice,rollDice}) {

 

  return (
    <DiceContainer>
          <div className="dice" onClick={rollDice}>
              <img src={`/public/dice_${currentDice}.png`} alt="" />
              
          </div>
          <p>Click On Dice To Roll</p>
    </DiceContainer>
  )
}
const DiceContainer = styled.div`
  display  : flex;
  align-items:center;
  margin-top:48px;
  flex-direction:column;

  p{
    font-size : 24px;
  }
  .dice{
  cursor: pointer;
  }
 
`