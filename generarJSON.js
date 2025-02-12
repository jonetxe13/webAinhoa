const fs = require('fs');
const path = require('path');

const directorio = './imagenes'; // Ruta al directorio de imágenes
const archivoJSON = 'imagenes.json'; // Nombre del archivo JSON de salida

fs.readdir(directorio, (err, archivos) => {
    if (err) {
        return console.error('Error leyendo el directorio:', err);
    }

    // Filtrar solo archivos de imagen (puedes ajustar las extensiones según sea necesario)
    const imagenes = archivos.filter(archivo => /\.(png|jpe?g|gif)$/i.test(archivo))
                             .map(archivo => path.join(directorio, archivo));

    // Crear el objeto JSON
    const json = {
        imagenes: imagenes
    };

    // Escribir el JSON en un archivo
    fs.writeFile(archivoJSON, JSON.stringify(json, null, 2), (err) => {
        if (err) {
            return console.error('Error escribiendo el archivo JSON:', err);
        }
        console.log('Archivo JSON generado con éxito:', archivoJSON);
    });
});
