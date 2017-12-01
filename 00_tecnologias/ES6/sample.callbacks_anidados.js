function msgAfterTimeout (msg, nombre, tiempo, cb) {
    // se ejecuta la función recibida como callback
    // dentro del setTimeOut
    // Para poder pasarle parámetros 
    // hay que incluirla en una función anónima
    setTimeout(function () {
         cb(msg, nombre);
    }, tiempo);
};

msgAfterTimeout("", "Pepe", 100, 
     // funnción enviada como callback
    function (msg, nombre) {
        let saludo = (`${msg} Hola ${nombre}!`);
        msgAfterTimeout(saludo, "Juan", 200,
         // funnción enviada como callback
        function (msg, nombre) {
            let saludo = (`${msg} Hola ${nombre}!`)
            // resultado acumulado de los dos callbacks
            console.log(`Saludo después de 0,3 seg: ${saludo}`);
            } // Fin de la función callback
        ); // Fin de la llamada a msgAfterTimeout 
    } // Fin de la función callback
); // Fin de la llamada a msgAfterTimeout

console.log("MENSALES");