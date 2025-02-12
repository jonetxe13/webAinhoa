#!/bin/bash

# Define el directorio y el archivo JSON de salida
directorio="./imagenes"
archivoJSON="imagenes.json"

# Inicia el contenido del archivo JSON
echo '{' > $archivoJSON
echo '  "imagenes": [' >> $archivoJSON

# Lee los archivos en el directorio y filtra por imágenes
primerArchivo=true
for archivo in "$directorio"/*; do
  if [[ $archivo =~ \.(png|jpe?g|gif)$ ]]; then
    if [ "$primerArchivo" = true ]; then
      primerArchivo=false
    else
      echo ',' >> $archivoJSON
    fi
    echo "    \"$archivo\"" >> $archivoJSON
  fi
done

# Cierra el contenido del archivo JSON
echo '  ]' >> $archivoJSON
echo '}' >> $archivoJSON

echo "Archivo JSON generado con éxito: $archivoJSON"
