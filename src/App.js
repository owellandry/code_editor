import React from 'react';
import Terminal from './components/Terminal';
import FileExplorer from './components/FileExplorer';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <div>
      <h1>Editor de Código</h1>
      <div className="app-container">
        <div className="sidebar">
          <FileExplorer />
        </div>
        <div className="main-content">
          <CodeEditor />
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default App;