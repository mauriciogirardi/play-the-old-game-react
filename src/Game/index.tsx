/* eslint-disable consistent-return */
import React, { useCallback, useState } from 'react';
import { FaCircle, FaRegTimesCircle } from 'react-icons/fa';

import { Container, GameBoard, GameMenu } from './styles';

interface StateProps {
  [key: string]: null | number;
}

function getInitialState() {
  const state = {} as StateProps;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      state[`${r}-${c}`] = null;
    }
  }

  return state;
}

function getWinner(values: any) {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const sumRow =
        values[`${r}-${c}`] + values[`${r}-${c + 1}`] + values[`${r}-${c + 2}`];

      if (sumRow === 3 || sumRow === -3) {
        return sumRow;
      }

      const sumCol =
        values[`${r}-${c}`] + values[`${r + 1}-${c}`] + values[`${r + 2}-${c}`];

      if (sumCol === 3 || sumCol === -3) {
        return sumCol;
      }

      const sumDiag =
        values[`${r}-${c}`] +
        values[`${r + 1}-${c + 1}`] +
        values[`${r + 2}-${c + 2}`];

      if (sumDiag === 3 || sumDiag === -3) {
        return sumDiag;
      }

      const sumRevertDiag =
        values[`${r}-${c}`] +
        values[`${r + 1}-${c - 1}`] +
        values[`${r + 2}-${c - 2}`];

      if (sumRevertDiag === 3 || sumRevertDiag === -3) {
        return sumRevertDiag;
      }
    }
  }

  return null;
}

const Game: React.FC = () => {
  const [values, setValues] = useState(getInitialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState<number | null>(null);

  const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner;

  const reset = useCallback(() => {
    setWinner(null);
    setValues(getInitialState);
    setPlayer(1);
  }, []);

  const getKeyFromIndex = useCallback((index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;

    return `${row}-${col}`;
  }, []);

  const handleClick = useCallback(
    (key: string) => {
      if (winner || values[key]) return;

      const newValues = { ...values, [key]: player };
      setValues(newValues);

      setPlayer(player * -1);
      const newWinner = getWinner(newValues);

      if (newWinner) {
        const findWinner = newWinner > 0 ? 1 : -1;
        setWinner(findWinner);
      }
    },
    [values, player, winner],
  );

  const getLabel = useCallback((value: null | number) => {
    if (!value) {
      return null;
    }

    return value > 0 ? (
      <FaRegTimesCircle size={48} color="#00ddff" />
    ) : (
      <FaCircle size={45} color="#d8c627" />
    );
  }, []);

  return (
    <Container>
      <h1>Jogo da velha</h1>
      <GameBoard>
        {Array.from({ length: 9 }).map((_, index) => {
          const key = getKeyFromIndex(index);

          return (
            <button key={index} type="button" onClick={() => handleClick(key)}>
              {getLabel(values[key])}
            </button>
          );
        })}
      </GameBoard>

      {(winner || itsATie) && (
        <GameMenu>
          {winner ? (
            <p>
              O ganhador é:
              {winner === 1 ? (
                <FaRegTimesCircle size={48} color="#00ddff" />
              ) : (
                <FaCircle size={45} color="#d8c627" />
              )}
            </p>
          ) : (
            <p>Houve um empate!</p>
          )}
          <button type="button" onClick={reset}>
            Reiniciar
          </button>
        </GameMenu>
      )}
    </Container>
  );
};

export default Game;
