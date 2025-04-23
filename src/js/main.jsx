import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let seconds = 0;
let isRunning = true;
let timer;
let targetTime = null;

const render = () => {
  root.render(
    <SecondsCounter 
      seconds={seconds}
      isRunning={isRunning}
      onStart={() => {
        if (!isRunning) {
          isRunning = true;
          timer = setInterval(() => {
            seconds++;
            render();
          }, 1000);
        }
      }}
      onStop={() => {
        isRunning = false;
        clearInterval(timer);
      }}
      onReset={() => {
        seconds = 0;
        isRunning = false;
        clearInterval(timer);
        render();
      }}
      onSetTarget={(time) => targetTime = time}
    />
  );

  if (targetTime !== null && seconds === targetTime) {
    alert(`¡Alerta! Has alcanzado ${targetTime} segundos`);
    targetTime = null;
  }
};

timer = setInterval(() => {
  if (isRunning) {
    seconds++;
    render();
  }
}, 1000);

render();