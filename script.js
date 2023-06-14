document.getElementById("code").addEventListener("input", function() {
    var code = document.getElementById("code").value;

    // Guardar el código en el almacenamiento local
    localStorage.setItem("code", code);
});

function ejecutarCodigo() {
    var code = document.getElementById("code").value;

    // Abrir una nueva pestaña y cargar una página con el resultado del código
    var resultWindow = window.open("", "_blank");
    resultWindow.document.write("<pre>" + code + "</pre>");
    resultWindow.document.close();
}

// Cargar el código del textarea desde el almacenamiento local al cargar la página
var storedCode = localStorage.getItem("code");
if (storedCode) {
    document.getElementById("code").value = storedCode;
}

