import { hello } from "./module.js";  
var app = {  
    saludo: () => {
        console.log( hello("Carlos"));
    }
}

app.saludo();
