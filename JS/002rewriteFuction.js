"use strict"

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
  };

  function checkAge2(edad) {
    if (edad || 18){
        return true;
    } else {
        return confirm('KLK tus padres te dejaron?')
    }
  };

  function checkAge3 (edad2) {
    if (edad ?? 18 ) {
        return true;
    } else {
        return confirm('KLK tus padres te dejaron')
    }
  }
  