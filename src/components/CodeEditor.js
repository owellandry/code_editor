import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

function CodeEditor() {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div style={{ float: 'right', width: '80%' }}>
      <MonacoEditor
        width="100%"
        height="90vh"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange}
        options={{
          automaticLayout: true,
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
        }}
      />
    </div>
  );
}

export default CodeEditor;