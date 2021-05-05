const moduloTareas = require("./tareas");
const process = require("process");
const comando = process.argv[2];

switch (comando) {
  case "agregar":                          //agrega una nueva tarea y luego muestra la lista
    let = titulo = process.argv[3];
    if (!titulo) {
      console.log("Debes escribir un titulo");
      break;
    }
    let = estado = process.argv[4];
    moduloTareas.agregarTarea(titulo, estado);
    break;
  case "listar":                          //lista las tareas existentes
    moduloTareas.listarTareas();
    break;
  case "filtrar":                         //filtra las tareas por titulo o estado
    moduloTareas.filtrarTareas(process.argv[3]);
    break;
  case "borrar":                          //borra la ultima tarea agregada
    moduloTareas.deshacer();
    break;
  case "cambiar":                         //cambia el estado de las tareas. Recibe un estado para buscar y lo cambia por el que se le asigne
    moduloTareas.cambiarEstado(process.argv[3], process.argv[4]);
    break;
  default:
    break;
}
