var estudiantes = [];
//Funcion para Registrar estudiantes
function registrarEstudiante(){
	'use strict';
	//Se capturan los datos ingresados en el formulario
	var codigoEstudiante = String(document.getElementById('codigo').value);
	var nombreEstudiante = String(document.getElementById('nombre').value);
	var notaEstudiante = parseFloat(document.getElementById('nota').value);
	if(isNaN(notaEstudiante)){
		alert("Por favor digite una nota valida");
	} else{
		if(confirm("Seguro que desea registrar el estudiante?")==true){
			//Se añaden al final del arreglo estudiantes
			estudiantes.push(
				{
					"codigo":codigoEstudiante,
					"nombre":nombreEstudiante,
					"nota":notaEstudiante
				}
			);
			imprimirEstudiante(codigoEstudiante,nombreEstudiante,notaEstudiante);
			borrarDatos();
		} else{
			borrarDatos();
		}
	}
}
//Funcion para imprimir en la tabla los estudiantes registrados
function imprimirEstudiante(cod,nom,not){
	'use strict';
	//Se guarda en una variable la tabla donde se van a imprimir los estudiantes con sus datos
	var tabla = document.getElementById('tablaEstudiantes');
	//Se crea una nueva fila para la tabla
	var nuevofila = tabla.insertRow(-1);
	//Se crean las celdas para ingresar los datos del estudiante
	var celdaCodigo = nuevofila.insertCell(0);
	var celdaNombre = nuevofila.insertCell(1);
	var celdaNota= nuevofila.insertCell(2);
	//Se ingresan los datos del estudiante en la tabla
	celdaCodigo.innerHTML = cod;
	celdaNombre.innerHTML = nom;
	celdaNota.innerHTML = not;	
}
//Funcion para borrar los datos digitados en los inputs de registro
function borrarDatos(){
	'use strict';
	var inputs = document.getElementsByTagName('input');
	for(var i=0; i<inputs.length; i++){
			inputs[i].value = "";
	}
}
//Funcion que realiza el promedio de notas de los estudiantes en el JSON e imprime el resultado en pantalla
function promedioNotas(){
	'use strict';
	var suma = 0;		//Variable donde se almacena la suma de las notas de todos los alumnos
	var contador = 0;	//Variable donde se almacenan la cantidad de alumnos
	var promedio;		//Variable donde se almacena el promedio de notas de los alumnos
	var i;				//Contador para el for
	for(i=0;i<estudiantes.length;i++){
		suma += estudiantes[i].nota;
		contador ++;
	}
	promedio = suma/contador;
	alert("El promedio de nota de los estudiantes es: " + promedio.toPrecision(3));
}
//Funcion para identificar que alumno tiene la mayor nota
function notaMayor(){
	'use strict';
	var notaAlta = estudiantes[0]; 	//Variablde donde se almacena el arreglo del estudiante que tiene la nota mas alta
	var i;							//Contador para el for
	for(i=1;i<estudiantes.length;i++){
		if((notaAlta.nota<estudiantes[i].nota)){
			notaAlta = estudiantes[i];
		}		
	}
	alert("El estudiante con la nota mas alta es: " + notaAlta.nombre + ", con " + notaAlta.nota);
}
//Funcion para identificar que alumno tiene la menor nota
function notaMenor(){
	'use strict';
	var notaBaja = estudiantes[0];	//Variable donde se almacena el arreglo del estudiante con la nota mas baja
	var i;							//Contador para el for
	for(i=1;i<estudiantes.length;i++){
		if(notaBaja.nota>estudiantes[i].nota){
			notaBaja = estudiantes[i];
		}		
	}
	alert("El estudiante con la nota mas baja es: " + notaBaja.nombre + ", con " + notaBaja.nota);
} 
//Funcion para cambiar el color de los botones cuando el mouse esta encima
function cambioColor(elemento){
	'use strict';
	elemento.style.background = "#7BF085";
}
//Funcion que cambia al color original cuando el mouse no esta encima del boton
function colorOriginal(elemento){
	'use strict';
	elemento.style.background = "#09B917";
}

document.getElementById('btnRegistro').addEventListener("click", registrarEstudiante);
document.getElementById('btnPromedio').addEventListener("click", promedioNotas);
document.getElementById('btnNotaMayor').addEventListener("click", notaMayor);
document.getElementById('btnNotaMenor').addEventListener("click", notaMenor);
