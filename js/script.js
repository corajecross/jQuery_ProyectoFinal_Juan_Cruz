$(document).ready(function(){
	'use strict';
	//Funcion para registrar un estudiante que se activa al darle click al boton con id btnRegistro
	$("#btnRegistro").click(function(){
		//Se capturan los datos ingresados en el formulario
		var codigo = $("#codigo").val();
		var nombre = $("#nombre").val();
		var nota = parseFloat($("#nota").val());
		//Se valida si la nota ingresada es numerica
		if($.isNumeric(nota)==false){
			alert("Por favor ingrese una nota valida");
		} else{
			var estudiante = {
				codigo: codigo,
				nombre: nombre,
				nota: nota
			};
			localStorage.setItem(codigo,JSON.stringify(estudiante));
			imprimirEstudiantes();
		}
	});
	//Funcion para calcular y mostrar el promedio de notas de los estudiantes registrados que se activa al darle click al boton con id btnPromedio
	$("#btnPromedio").click(function(){
		var suma = 0;		//Variable donde se almacena la suma de las notas de todos los alumnos
		var contador = 0;	//Variable donde se almacenan la cantidad de alumnos
		var promedio;		//Variable donde se almacena el promedio de notas de los alumnos
		//Verifica si hay estudianes registrados
		if(localStorage.length == 0){
			alert("No hay estudiantes registrados");
		}else{
			for(var i=0; i<localStorage.length; i++){
				var clave = localStorage.key(i);
				var estudiante = $.parseJSON(localStorage.getItem(clave));
				suma += parseFloat(estudiante.nota);
				contador ++;
			}
			promedio = suma/contador;
			alert("El promedio de nota de los estudiantes es: " + promedio.toPrecision(3));
		}
	});
	//Funcion que identifica la nota mayor que se activa al hacer click en el boton con id btnNotaMayor
	$("#btnNotaMayor").click(function(){
		var notaAlta = 0;
		var estudianteAlta;
		if(localStorage.length == 0){
			alert("No hay estudiantes registrados");
		}else{
			for(var i=0; i<localStorage.length; i++){
				var clave = localStorage.key(i);
				var estudiante = $.parseJSON(localStorage.getItem(clave));
				var notaEstudiante = parseFloat(estudiante.nota);
				var nombreEstudiante = estudiante.nombre;
				if(notaEstudiante>notaAlta){
					notaAlta = notaEstudiante;
					estudianteAlta = nombreEstudiante;
				}
			}
			alert("El estudiante con la nota mas alta es: " + estudianteAlta + ", con " + notaAlta);
		}
	});
	//Funcion que identifica la nota menor que se activa al hacer click en el boton con id btnNotaMenor
	$("#btnNotaMenor").click(function(){
		var notaBaja = 0;
		var estudianteBaja;
		if(localStorage.length == 0){
			alert("No hay estudiantes registrados");
		}else{
			for(var i=0; i<localStorage.length; i++){
				var clave = localStorage.key(i);
				var estudiante = $.parseJSON(localStorage.getItem(clave));
				var notaEstudiante = parseFloat(estudiante.nota);
				var nombreEstudiante = estudiante.nombre;
				if(nombreEstudiante<notaBaja){
					notaBaja = notaEstudiante;
					estudianteBaja = nombreEstudiante;
				}
			}
			alert("El estudiante con la nota mas baja es: " + estudianteBaja + ", con " + notaBaja);
		}
	});
});
//Funcion para imprimir en la tabla los estudiantes registrados
function imprimirEstudiantes(cod,nom,not){
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
