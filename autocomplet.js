// Lista de palabras clave para el autocompletado
var keywords = [
    "function",
    "if",
    "else",
    "for",
    "while",
    "var",
    "const",
    "let",
    // Agrega más palabras clave aquí
  ];
  
  // Obtener el elemento de entrada de texto
  var codeInput = document.getElementById("code");
  
  // Evento para detectar la pulsación de teclas
  codeInput.addEventListener("keydown", function(event) {
    // Obtener el valor actual del texto
    var code = codeInput.value;
  
    // Obtener la posición del cursor
    var cursorPosition = codeInput.selectionStart;
  
    // Verificar si la tecla presionada es la tecla de autocompletado (por ejemplo, el carácter "Tab")
    if (event.key === "Tab") {
      event.preventDefault();
  
      // Buscar la palabra actual antes del cursor
      var currentWord = "";
      var i = cursorPosition - 1;
      while (i >= 0 && code[i] !== " " && code[i] !== "\n") {
        currentWord = code[i] + currentWord;
        i--;
      }
  
      // Filtrar las palabras clave que coincidan con la palabra actual
      var matchingKeywords = keywords.filter(function(keyword) {
        return keyword.startsWith(currentWord);
      });
  
      // Si hay una sola palabra clave coincidente, completarla
      if (matchingKeywords.length === 1) {
        // Agregar la palabra clave restante al texto
        var remainingCode = code.slice(cursorPosition);
        codeInput.value = code.slice(0, i + 1) + matchingKeywords[0] + remainingCode;
  
        // Mover el cursor a la posición correcta después de la palabra clave completada
        codeInput.selectionStart = i + matchingKeywords[0].length + 1;
        codeInput.selectionEnd = i + matchingKeywords[0].length + 1;
      }
    }
  });
  