import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './SecondsCounter.css'; 

export default function SecondsCounter({ 
  seconds, 
  isRunning, 
  onStart, 
  onStop, 
  onReset, 
  onSetTarget 
}) {
  const formatSeconds = (sec) => sec.toString().padStart(6, '0');
  const [inputTime, setInputTime] = React.useState('');

  return (
    <div className="counter-container">
      <div className="counter-display">
        <FontAwesomeIcon icon={faClock} className="counter-icon" />
        {[...formatSeconds(seconds)].map((digit, i) => (
          <span key={i} className="counter-digit">
            {digit}
          </span>
        ))}
      </div>

      <div className="counter-controls">
        <button 
          onClick={onStart}
          disabled={isRunning}
          className="counter-btn counter-btn-start"
        >
          Iniciar
        </button>
        <button 
          onClick={onStop}
          disabled={!isRunning}
          className="counter-btn counter-btn-stop"
        >
          Detener
        </button>
        <button 
          onClick={onReset}
          className="counter-btn counter-btn-reset"
        >
          Reiniciar
        </button>
      </div>

      <div className="counter-alert-control">
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          placeholder="Establecer alerta en..."
          className="counter-input"
        />
        <button 
          onClick={() => {
            onSetTarget(Number(inputTime));
            setInputTime('');
          }}
          disabled={!inputTime}
          className="counter-btn counter-btn-alert"
        >
          Establecer Alerta
        </button>
      </div>
    </div>
  );
}

