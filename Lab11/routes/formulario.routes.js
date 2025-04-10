// routes/formulario.routes.js
const { parse } = require('querystring');
const fs = require('fs');

function manejarFormulario(request, response) {
    //Ruta del formulario que se puede ver en el navegador
    if (request.url === "/formulario" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head><meta charset="UTF-8"><title>Formulario</title>
            <link rel="stylesheet" href="/Lab08.css"></head>
            <body><h1>Formulario de contacto</h1>
            <form method="POST" action="/procesar">
                <label>Nombre: <input type="text" name="nombre" required></label><br>
                <label>Mensaje: <textarea name="mensaje" required></textarea></label><br>
                <button type="submit">Enviar</button>
            </form><a href="/">Volver a inicio</a><script src="/Lab08.js"></script></body></html>
        `);
        response.end();
        return true;
    }

    //Ruta que se llama usando POST en postman y manda un archivo de texto al servidor
    if (request.url === "/procesar" && request.method === "POST") {
        let body = '';
        request.on('data', chunk => body += chunk.toString());
        request.on('end', () => {
            const datos = parse(body);
            const texto = `Nombre: ${datos.nombre}\nMensaje: ${datos.mensaje}\n---\n`;
            fs.appendFile('mensajes.txt', texto, err => {
                if (err) {
                    response.writeHead(500);
                    response.end('Error al guardar el mensaje');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(`
                        <html lang="es"><head><meta charset="UTF-8"><title>Gracias</title>
                        <link rel="stylesheet" href="/Lab08.css"></head><body>
                        <h1>Mensaje recibido</h1><p>Gracias por tu mensaje.</p>
                        <a href="/">Volver a inicio</a><script src="/Lab08.js"></script></body></html>
                    `);
                    response.end();
                }
            });
        });
        return true;
    }

    return false;
}

module.exports = manejarFormulario;
