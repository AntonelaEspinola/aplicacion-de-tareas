const fs = require("fs");
const tareas = JSON.parse(fs.readFileSync("./db/tareas.json", "utf-8"));
module.exports = {
    verCartel : function(mensaje){
        console.log('***************');
        console.log(mensaje);
        console.log('***************');
    },
  agregarTarea: function (titulo, estado = "pendiente") {
    let nuevaTarea = {
      //con los parametros creo una nueva tarea
      titulo,
      estado,
    };
    tareas.push(nuevaTarea); //agrego una nueva tarea!
   this.guardarJson(tareas);
    this.listarTareas();
  },
  listarTareas: function () {
    tareas.forEach((tarea) => {
      //lista las tareas, reemplaza al for
      console.log(tarea);
    });
  },

  filtrarTareas: function (filtro) {
    let tareasFiltradas = tareas.filter(
      (tarea) => tarea.estado === filtro || tarea.titulo.includes(filtro)
    );
    return console.log(tareasFiltradas);
  },
  deshacer : function(){
      tareas.pop();
      this.guardarJson(tareas);
      this.verCartel('Tarea borrada!')
      this.listarTareas();
  },
  guardarJson : function(){
    fs.writeFileSync("./db/tareas.json", JSON.stringify(tareas), "utf-8"); //escribo en el archivo json
      
  },
  cambiarEstado : function(estado, nuevoEstado){
let tareasModificadas = tareas.map(tarea => {
    if(tarea.estado === estado){
    
        tarea.estado = nuevoEstado
    }
    return tarea
  
})
console.log(tareasModificadas);
  }
};
