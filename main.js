function sortNumber(a,b) {
    return a - b;
}
let Tam = 10
var cantidadNumeros = Tam;

var myArray = [];
myArray.length = Tam;
let j=0;
while(j < cantidadNumeros-1 ){
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=0;i<myArray.length;i++){
	if(myArray [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    myArray[j] = numeroAleatorio;
    j++
  }

}
console.log(myArray)

let orderArray = myArray.sort(sortNumber);
console.log(myArray.sort(sortNumber))
let validation =1, auxArray;
for (var i = 0; i < orderArray.length; i++) {
	auxArray = orderArray[i];
	if (auxArray != validation) {
		console.log("validacion: "+validation);
		alert("Numero faltante es: "+validation )
		break;
	}
	validation++;
}
