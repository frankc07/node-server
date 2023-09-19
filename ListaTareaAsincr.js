let readlineSync = require("readline-sync");

let listaTarea = [];

function agregarTarea() {
  return new Promise((resolve) => {
    let indicador = readlineSync.question("Ingrese indicador para tarea: ");
    let descripcion = readlineSync.question("Ingrese descripcion para tarea: ");

    listaTarea.push({
      indicador,
      descripcion,
      tareaLista: false, 
    });
    console.log("TAREA AGREGADA");
    resolve();
  });
}

function eliminarTarea() {
  return new Promise((resolve) => {
    let indicador = readlineSync.question("Seleccione tarea para Eliminar");

    let listaTareaArray = listaTarea.filter(
      (tarea) => tarea.indicador !== indicador
    );
    if (listaTareaArray.length < listaTarea.length) {
      listaTarea = listaTareaArray;
      console.log("TAREA ELIMINADA");
    } else {
      console.log("NO SE ENCONTRO TAREA");
    }
    resolve();
  });
}

function completarTarea() {
  return new Promise((resolve) => {
    let indice = readlineSync.question("ingrese el indice de la tarea a completar: ");
    if (indice >= 0 && indice < listaTarea.length) {
      listaTarea[indice].tareaLista = true;
      console.log("Tarea Completada");
    } else {
      console.log("INDICE NO ENCONTRADO");
    }
    resolve();
  });
}

function ListaDeTareas() {
  console.log("listaTareas: ");
  listaTarea.forEach((tarea, indice) => {
    const estado = tarea.tareaLista ? "[X]" : "Pendiente: ";
    console.log(
      `Indice de tarea: ${indice} - Estado: ${estado} - Indicador: ${tarea.indicador} - Descripcion de Tarea: ${tarea.descripcion}`
    );
  });
}

async function MenuTarea() {
  while (true) {
    console.log("  ─ Menu de Tareas ─  ");
    console.log("1. Agregar una Tarea");
    console.log("2. Motrar Tareas");
    console.log("3. Completar una Tarea");
    console.log("4. Eliminar una Tarea");
    console.log("5. Salir del Menu");

    let opciones = readlineSync.question("Ingresa una opcion: ");

    switch (opciones) {
      case "1":
        await agregarTarea();
        break;
      case "2":
        ListaDeTareas();
        break;
      case "3":
        await completarTarea();
        break;
      case "4":
        await eliminarTarea();
        break;
      case "5":
        return;
      default:
        console.log("Opcion invalida");
    }
  }
}

MenuTarea();
