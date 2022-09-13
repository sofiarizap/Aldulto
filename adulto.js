//Adultos Escribe una función llamada `adultos` que reciba un arreglo de números (que representan edades) y retorne `true` 
//si todos son adultos, o `false` de lo contrario. Un adulto tiene 18 o más pero menos de 70.


//adultos([28, 45, 19, 21, 18, 69]) -> true
//adultos([28, 45, 17, 21, 17, 70]) -> false
//adultos([28, 45, 71, 21]) -> false

function adultos (arr){ 
    var result = true
    for ( var i = 0; i < arr.length; i++){
      if (arr[i] > 18 && arr[i] < 70 ){
        result = true
      } else {
         result = false
         break
      }
   }
   return result
}