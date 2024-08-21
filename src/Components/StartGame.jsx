import styled from "styled-components";
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
const Button = styled.button`

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
