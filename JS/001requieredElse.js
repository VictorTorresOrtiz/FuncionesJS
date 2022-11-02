"use strict"

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('¿Tus padres te permitieron?');
    }
  }

  //Si, ya que no saltaria el return  