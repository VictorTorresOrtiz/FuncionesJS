"use strict"

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('¿Tus padres te permitieron?');
    }
  }

  //Si no se cumple la ejecucion continua y devuelve el return con el comentario es decir en este caso no hace falta que pase por el else