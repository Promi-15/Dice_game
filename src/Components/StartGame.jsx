import styled from "styled-components";
import { Button } from "../Styled/Button";
export default function StartGame({toggle}) {
  return (
    <Container>
      <div>
        <img src="/public/dices .png" alt="" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
max-width : 1180px;
display: flex;
margin: 0 auto;
align-items: center;
height: 100vh;

.content {
  h1{
    font-size : 96px
  }
}
`;

