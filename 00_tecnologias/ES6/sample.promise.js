function msgAfterTimeout (msg, nombre, tiempo) {
    // la función asíncrona devuelve una promesa
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(`${msg} Hola ${nombre}!`), 
            tiempo)
    })
}

msgAfterTimeout("", "Pepe", 100)
// msg almacena el resultado del primer proceso asincrónico
.then((msg) =>
    msgAfterTimeout(msg, "Juan", 200))
// msg almacena los sucesivos resultados de los procesos asincrónicos
.then((msg) => {
// operamos finalmente con msg
    console.log(`Saludo después de 0,3 seg: ${msg}`)
})