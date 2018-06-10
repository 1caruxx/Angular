import { FuncionesPropias } from "./lib.js";

$(document).ready(function() {

  var foo = [
    {"nombre": "fernando", "apellido": "lareu", "edad": 20},
    {"nombre": "pedro", "apellido": "mmendex", "edad": 24, "nacionalidad": "argentina"},
    {"nombre": "luis", "apellido": "fabrichi", "edad": 60, "color de ojos": "azules"},
  ];

console.log(FuncionesPropias.AnalizadorDePropiedades(foo));
});