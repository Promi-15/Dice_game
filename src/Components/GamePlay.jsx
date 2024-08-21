import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";


export default function GamePlay() {
    const [score,setScore]= useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error,setError] =useState("")
    const [showRules,setShowRules]=useState(false)

       
    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectedNumber) { 
            setError("You have not selected any number")
            return
        }
        setError("")

        
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber)

       
        
        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        }
        else {
            setScore((prev) => prev - 2)
        }
    setSelectedNumber(undefined)

    }
    const resetScore = () => {
        setScore(0)
    }
   
  return (
    <MainContainer>
          <div className="top-section">
          <TotalScore score={score}></TotalScore>
              <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}></NumberSelector>
              
          </div>
          <RoleDice currentDice={currentDice} rollDice={rollDice}></RoleDice>
          <div className="btns">
              <OutlineButton onClick={resetScore}>Reset</OutlineButton>
              <Button onClick={() => setShowRules((prev) => !prev)}> { showRules ? "Hide" : "Show"} Rules</Button>
              
          </div>
          {
              showRules && <Rules ></Rules>
          }
    </MainContainer>
  )
}
const  MainContainer = styled.div`
    
.top-section{
    display: flex;
    align-items : end;
    justify-content : space-between
}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
}
`