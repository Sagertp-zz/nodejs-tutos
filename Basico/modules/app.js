const os = require('os');
const fs = require('fs');
const mi = require('./mito.js')

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
let rpst = mi.sumar(10,5);
let rpst2 = mi.mostrar(10);
/*console.log(cpu);
console.log(usuario);
console.log(sistema);
console.log(mi.subscriptores);
*/


/*fs.appendFile('mitocode.txt', 'hola mundo esto es nodejs, vamos a agregar informacion del cpu:' + JSON.stringify(cpu), function(error){
if(error){
console.log('Error al crear archivo.')
}
});*/

mi.saludar();
console.log(mi.subs);
console.log(rpst);
console.log(rpst2);

setTimeout(() => {console.log('Termine de ejecutarme.')},2000);