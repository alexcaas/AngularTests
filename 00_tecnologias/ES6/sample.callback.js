function msgAfterTimeout (msg, who, time, cb) {
    // se ejecuta la función recibida com callback
    // dentro del setTimeOut
    setTimeout(function () {
         cb(msg, who);
    }, time);
};

msgAfterTimeout("", "Foo", 1000, 
     // funnción enviada como callback
    function (msg, who) {console.log(`${msg} Hello ${who}!`);}
);
console.log("MENSALES");



// msgAfterTimeout("", "Foo", 100)
// .then((msg) =>
//     msgAfterTimeout(msg, "Bar", 200))
// .then((msg) => {
//     console.log(`done after 300ms:${msg}`)
// })