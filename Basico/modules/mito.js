//console.log(module);

/*function saludar(){
    console.log('Suscribete al canal coder');
}
console.log('Suscribete .com');


module.exports.subscriptores = 22000;

module.exports.saludar = saludar();*/

let subscriptores = 22000;

module.exports = {
    subs : subscriptores,
    saludar : function(){console.log('Hola Coder.s');},
    sumar : (a, b) => {return a + b},
    mostrar : a => a + 10
}