import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  h1 {
    text-align: center;
    margin: 3rem 0;
    font-family: 'Rock Salt', cursive;
    color: #57149e;
    font-size: 2rem;
  }
`;

export const GameBoard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  button {
    background: linear-gradient(0deg, #353535, #000);
    height: 5.5rem;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e,
      inset 0 0 0 10px rgba(0, 0, 0, 1), 0 5px 20px rgba(0, 0, 0, 0.5),
      inset 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;

export const GameMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: rgba(255, 255, 255, 100);
  border-radius: 10px;
  padding: 15px;

  p {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: bold;
    svg {
      margin-left: 1rem;
    }
  }

  button {
    background: #333;
    box-shadow: none;
    height: 2rem;
    font-size: 1rem;
    color: #fff;
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
