const http = require('http');
const fs = require('fs');
const path = require('path');
const manejarPrincipal = require('./routes/principal.routes');
const manejarFormulario = require('./routes/formulario.routes');

const server = http.createServer((request, response) => {
    console.log(`Petición recibida: ${request.url}`);

    // Sirve archivos estáticos
    if (request.url === "/Lab08.css" || request.url === "/Lab08.js") {
        const filePath = path.join(__dirname, request.url);
        const fileExt = path.extname(filePath);
        const contentType = fileExt === ".css" ? "text/css" : "text/javascript";
        fs.readFile(filePath, (err, data) => {
            if (err) {
                response.writeHead(404);
                response.end("Archivo no encontrado");
            } else {
                response.writeHead(200, { "Content-Type": contentType });
                response.end(data);
            }
        });
    }

    // Delegar rutas
    else if (manejarPrincipal(request, response)) return;
    else if (manejarFormulario(request, response)) return;

    // 404 por defecto
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write(`
            <html lang="es"><head><title>Error 404</title></head>
            <body><h1>Error 404</h1><p>La página que buscas no existe.</p>
            <a href="/">Volver a inicio</a></body></html>
        `);
        response.end();
    }
});

server.listen(4000, () => {
    console.log("Servidor corriendo en http://localhost:4000");
});
