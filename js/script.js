//Declaracion del JSON estudiantes
var estudiantes = [
	{
		"codigo":"A01",
		"nombre":"Juan Perez",
		"nota":4.2
	},
	{
		"codigo":"A02",
		"nombre":"Pedro Pelaez",
		"nota":3.5
	},
	{
		"codigo":"A03",
		"nombre":"Ignacio Sinisterra",
		"nota":3.8
	},
	{
		"codigo":"A04",
		"nombre":"Fermin Huertas",
		"nota":3.1
	},
	{
		"codigo":"A05",
		"nombre":"Moises Vega",
		"nota":4.2
	},
	{
		"codigo":"A06",
		"nombre":"Axl Rose",
		"nota":2.5
	},
	{
		"codigo":"A07",
		"nombre":"James Brown",
		"nota":4.5
	},
	{
		"codigo":"A08",
		"nombre":"Roberto Ramirez",
		"nota":3.9
	},
	{
		"codigo":"A09",
		"nombre":"Jacobo Miller",
		"nota":4.0
	},
	{
		"codigo":"A10",
		"nombre":"Prudencio Alvarez",
		"nota":4.3
	}
]
//Funcion para mostrar en pantalla todos los elementos en el JSON estudiantes
function mostrarEstudiantes(){
	var salida = "Listado Estudiantes<br>"; 		//Variable donde se almacena lo que debe mostrarse en pantalla
	var i;										 	//Contador para el for
	for(i=0;i<estudiantes.length;i++){
		salida += "Codigo: " + estudiantes[i].codigo + " - Nombre: " + estudiantes[i].nombre + " - Nota: " + estudiantes[i].nota + "<br>";
	}
	document.getElementById('estudiantes').innerHTML = salida;
}
//Funcion que realiza el promedio de notas de los estudiantes en el JSON e imprime el resultado en pantalla
function promedioNotas(){
	var suma = 0;		//Variable donde se almacena la suma de las notas de todos los alumnos
	var contador = 0;	//Variable donde se almacenan la cantidad de alumnos
	var promedio;		//Variable donde se almacena el promedio de notas de los alumnos
	var i;				//Contador para el for
	for(i=0;i<estudiantes.length;i++){
		suma += estudiantes[i].nota;
		contador ++;
	}
	promedio = suma/contador;
	document.getElementById('promedio').innerHTML = "El promedio de nota de los estudiantes es: " + promedio;
}
//Funcion para identificar que alumno tiene la mayor nota
function notaMayor(){
	var notaAlta = estudiantes[0]; 	//Variablde donde se almacena el arreglo del estudiante que tiene la nota mas alta
	var i;							//Contador para el for
	for(i=1;i<estudiantes.length;i++){
		if((notaAlta.nota<estudiantes[i].nota)){
			notaAlta = estudiantes[i];
		}
		document.getElementById('notaAlta').innerHTML = "El estudiante con la nota mas alta es: " + notaAlta.nombre;
	}
}
//Funcion para identificar que alumno tiene la menor nota
function notaMenor(){
	var notaBaja = estudiantes[0];	//Variable donde se almacena el arreglo del estudiante con la nota mas baja
	var i;							//Contador para el for
	for(i=1;i<estudiantes.length;i++){
		if(notaBaja.nota>estudiantes[i].nota){
			notaBaja = estudiantes[i];
		}
		document.getElementById('notaBaja').innerHTML = "El estudiante con la nota mas baja es: " + notaBaja.nombre;
	}
}
//Funcion para cambiar el color de los botones cuando el mouse esta encima
function cambioColor(elemento){
	elemento.style.background = "#7BF085";
}
//Funcion que cambia al color original cuando el mouse no esta encima del boton
function colorOriginal(elemento){
	elemento.style.background = "#09B917";
}