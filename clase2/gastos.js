window.onload = function(){

  var confirma = window.confirm ('iniciar?');
  if(!confirma){
    window.alert('Gracias por su visita');
    window.location.href = 'https://www.netflix.com';
  }

  var cantInt = prompt('Cantidad de integrantes');

  if (isNaN(cantInt)){
    window.alert('no es un numero, re ingrese');
    var cantInt = prompt('Cantidad de integrantes');
  }

  if (cantInt<3) {
    window.alert('la cantidad de integrantes debe ser mayor que 3, re ingrese');
    var cantInt = prompt('Cantidad de integrantes');

  }

  var integrantes;//crear un array asociativo con calves de nombre y gasto, de tamaño cantInt

  //hace run for y por cada itenracion le pregunto nombre y gastos y voy guardando
  console.log(cantInt);
}
