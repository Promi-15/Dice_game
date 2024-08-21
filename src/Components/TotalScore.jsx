import styled from "styled-components";


export default function TotalScore({score}) {
  return (
    <ScoreContainer>
      <h1>{ score}</h1>
      <p>Total score</p>
    </ScoreContainer>
  );
}
const ScoreContainer = styled.div`
max-width : 200px;
/* background-color: rebeccapurple; */
h1{
    font-size : 100px;
    line-height : 100px
}
p{
    font-size: 24px;
    font-weight: 500px;
}
`;
