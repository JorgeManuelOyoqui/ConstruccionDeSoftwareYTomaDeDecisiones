const http = require("http"); // Importamos el módulo HTTP
const fs = require("fs"); // Importamos el módulo FS para manejar archivos

// Función para calcular el promedio de un arreglo de números
function calcularPromedio(numeros) {
    if (numeros.length === 0) return 0; // Evitar divisiones por cero
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

// Función para escribir un string en un archivo de texto
function escribirArchivo(nombreArchivo, contenido) {
    fs.writeFile(nombreArchivo, contenido, (err) => {
        if (err) {
            console.error("Error al escribir el archivo:", err);
        } else {
            console.log(`El archivo "${nombreArchivo}" ha sido guardado correctamente.`);
        }
    });
}

// Función para convertir un número decimal a binario
function decimalABinario(numero) {
    if (numero < 0) return "Solo acepto números positivos"; 
    return numero.toString(2); // Método de JS que convierte un número a binario
}

// Creación del servidor
const server = http.createServer((request, response) => {
    console.log(request.url); // Muestra la URL en la consola

    response.setHeader("Content-Type", "text/html");

    if (request.url === "/") {
        // HTML de la página principal
        response.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>Ejercicios Node.js</title>
            </head>
            <body>
                <h1>Ejercicios de Node.js</h1>
                <p>Revisa la consola para ver los resultados de las funciones.</p>
            </body>
            </html>
        `);

        // Probamos las funciones y mostramos los resultados en consola
        console.log("Ejecutando funciones...");

        // Ejemplo de uso de la función de promedio
        const numeros = [10, 20, 30, 40, 50];
        console.log("Promedio de", numeros, "es:", calcularPromedio(numeros));

        // Ejemplo de uso de la función de escribir en un archivo
        const mensaje = "Hola, este es un archivo generado desde Node.js!";
        escribirArchivo("mensaje.txt", mensaje);

        // Ejemplo de conversión decimal a binario
        const numeroDecimal = 25;
        console.log(`El número ${numeroDecimal} en binario es: ${decimalABinario(numeroDecimal)}`);

    } else {
        response.write("Es un error");
    }

    response.end();
});

// Escuchamos en el puerto 3000
server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
