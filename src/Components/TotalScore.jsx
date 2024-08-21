import styled from "styled-components";

export default function TotalScore() {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total score</p>
    </ScoreContainer>
  );
}
const ScoreContainer = styled.div`
h1{
    font-size : 100px
}
`