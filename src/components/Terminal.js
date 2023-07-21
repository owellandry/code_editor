import React, { useState } from 'react';
import './Terminal.css';

function Terminal() {
  const [output, setOutput] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const executeCommand = (command) => {
    let commandOutput;

    try {
      commandOutput = eval(command);

      if (typeof commandOutput !== 'undefined') {
        setOutput((prevOutput) => prevOutput + '\n' + commandOutput.toString());
      }
    } catch (error) {
      commandOutput = 'Error: ' + error.message;
      setOutput((prevOutput) => prevOutput + '\n' + commandOutput);
    }
  };

  const handleToggleVisibility = () => {
    setIsHidden((prevHidden) => !prevHidden);
  };

  const handleDeleteTerminal = () => {
    // Implementa aquí la lógica para eliminar la terminal
  };

  const handleCreateNewTerminal = () => {
    // Implementa aquí la lógica para crear una nueva terminal
  };

  const handleToggleMaximize = () => {
    setIsMaximized((prevMaximized) => !prevMaximized);
  };

  return (
    <div
      className={`terminal ${isHidden ? 'hidden' : ''} ${isMaximized ? 'maximized' : ''}`}
    >
      <div className="terminal-header">
        <div className="terminal-title">Terminal</div>
        <div className="terminal-actions">
          <button className="terminal-action" onClick={handleToggleVisibility}>
            {isHidden ? 'Mostrar' : 'Ocultar'}
          </button>
          <button className="terminal-action" onClick={handleDeleteTerminal}>
            Eliminar
          </button>
          <button className="terminal-action" onClick={handleCreateNewTerminal}>
            Nueva Terminal
          </button>
          <button className="terminal-action" onClick={handleToggleMaximize}>
            {isMaximized ? 'Minimizar' : 'Maximizar'}
          </button>
        </div>
      </div>
      <pre>{output}</pre>
      <input
        type="text"
        placeholder="Escribe un comando..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            executeCommand(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}

export default Terminal;