import React from 'react';
import './style.css';

export default function App() {
  let arr = Array(5)
    .fill(0)
    .map(() => Array(5).fill(0));

  return (
    <div>
      <h1>Chess Board!</h1>
      <div className={'board-wrapper'}>
        {arr.map((rows, i) => (
          <div className="chessWrapper">
            {rows.map((cols, j) => (
              <div
                className={j % 2 == 0 ? 'chessBoxes-white' : 'chessBoxes-black'}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
