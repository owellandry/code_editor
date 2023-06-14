<!DOCTYPE html>
<html>
<head>
    <title>Editor de Código</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="editor">
        <div class="top-bar">
            <div class="title">Editor de Código</div>
            <button id="run-btn" onclick="ejecutarCodigo()">Ejecutar</button>
        </div>
        <textarea id="code"></textarea>
    </div>
    <script src="script.js"></script>
    <script src="autocomplet.js"></script>
</body>
</html>