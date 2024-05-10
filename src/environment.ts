import fs from 'node:fs';


let apiKey = ''
try {
    apiKey = fs.readFileSync('/run/secrets/api-key', 'utf8');
} catch (e) {
    console.log('Archivo no encontrado /run/secrets/api-key');
}

export { apiKey };