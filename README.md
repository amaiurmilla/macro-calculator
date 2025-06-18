# Macro Calculator

Esta aplicación web calcula los macronutrientes diarios en función de los datos del usuario. Puede ejecutarse como una PWA y cuenta con un pequeño conjunto de pruebas.

## Instalación

1. Asegúrate de tener Node.js (versión 18 o superior).
2. Clona este repositorio y ejecuta:

```bash
npm install
```

No hay dependencias externas, pero el comando generará el `package-lock.json` necesario para reproducir el entorno.

## Pruebas

Para ejecutar la suite de pruebas utiliza:

```bash
npm test
```

## Browser Compatibility

`script.min.js` uses modern JavaScript features (ES2015+), such as `let`, arrow
functions and `async/await`. These are unsupported in older browsers like
Internet Explorer. Use a modern browser (Chrome, Firefox, Safari, Edge, etc.) to
run the application. If legacy browser support is required, compile the source
with a tool such as Babel before deployment.

## Añadir nuevos idiomas

1. Crea un archivo JSON en la carpeta `locales` siguiendo el formato de `en.json` o `es.json`.
2. Añade una opción con el nuevo código de idioma en `index.html` dentro del elemento `<select id="language">`.
3. (Opcional) Incluye el nuevo archivo en la lista de recursos del `service-worker.js` para disponer de él sin conexión.

