// promesa cumplida
let  promesa = new  Promise(function(resolve, reject) {
    setTimeout(()  => resolve(new Error("Hecho!")), 1000);
   });
   
   // resolve ejecuta la primera funcion en .then
   promesa.then(
     result => alert(result), // Muestra "hecho!" depues de 1 segundo
     error => alert(error) // no se ejecuta
   );