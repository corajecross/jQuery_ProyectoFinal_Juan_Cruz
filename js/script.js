//Funcion para mostrar en pantalla los estudiantes almacenados en el localStorage
function imprimirEstudiantes(){
	'use strict';
	var tabla = "";
	var contTabla = $("#contEstudiantes");
	//Construccion de la tabla
	tabla += '<table id="tablaEstudiantes" align="center" border="1">';
	tabla += '<thead><td colspan="5" align="center" class="encabezadoTabla">Listado De Estudiantes</td></thead>';
	tabla += '<tr>';
	tabla += '<td align="center"><b>Codigo</b></td>';
	tabla += '<td align="center"><b>Nombre</b></td>';
	tabla += '<td align="center"><b>Nota</b></td>';
	tabla += '<td align="center"><b>Editar</b></td>';
	tabla += '<td align="center"><b>Eliminar</b></td>';
	tabla += '</tr>';
	//Se recorren los datos almacenados localmente para imprmirlos en pantalla
	for(var i=0; i<localStorage.length; i++){
		var clave = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(clave));
		tabla += '<tr>';
		tabla += '<td>' + estudiante.codigo + '</td>';
		tabla += '<td>' + estudiante.nombre + '</td>';
		tabla += '<td>' + estudiante.nota + '</td>';
		tabla += '<td align="center"><button onclick="editarEstudiante(\''+estudiante.codigo+'\')">Editar</button></td>';
		tabla += '<td align="center"><button onclick="eliminarEstudiante(\''+estudiante.codigo+'\')">Eliminar</button></td>';
		tabla += '</tr>';
	}
	tabla += '</table>';
	$(contTabla).html(tabla);
}
//Funcion para editar un alumno que se activa al hacer click en el boton editar
function editarEstudiante(codigo){
	'use strict';
	var estudiante;
	for(var i=0; i<localStorage.length; i++){
		var clave = localStorage.key(i);
		if(codigo == clave){
			estudiante = $.parseJSON(localStorage.getItem(clave));
			$("#codigo").val(estudiante.codigo);
			$("#nombre").val(estudiante.nombre);
			$("#nota").val(estudiante.nota);
		}
	}
}
//Funcion para eliminar un estudiante del almacenamiento local
function eliminarEstudiante(codigo){
	localStorage.removeItem(codigo);
	imprimirEstudiantes();
}
//jQuery
$(document).ready(function(){
	'use strict';
	imprimirEstudiantes();
	//Funcion para registrar un estudiante que se activa al darle click al boton con id btnRegistro
	$("#btnRegistro").click(function(){
		//Se capturan los datos ingresados en el formulario
		var codigo = $("#codigo").val();
		var nombre = $("#nombre").val();
		var nota = parseFloat($("#nota").val());
		//Se valida si la nota ingresada es numerica
		if($.isNumeric(nota)==false){
			alert("Por favor ingrese una nota numerica");
			$("#nota").val("");
		}
		//Se valida que la nota ingresada este dentro de un rango entre 0 y 5
		else if(nota<0 || nota>5){							
			alert("Por favor digite una nota entre 0 y 5");
			$("#nota").val("");
		} 
		else{
			if(confirm("Esta seguro que desea registrar el estudiante?")==true){
				var estudiante = {
				codigo: codigo,
				nombre: nombre,
				nota: nota
				};
				localStorage.setItem(codigo,JSON.stringify(estudiante));
				imprimirEstudiantes();
				borrarDatos();
			}else{
				borrarDatos();
			}
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
		var notaBaja = 5;
		var estudianteBaja;
		if(localStorage.length == 0){
			alert("No hay estudiantes registrados");
		}else{
			for(var i=0; i<localStorage.length; i++){
				var clave = localStorage.key(i);
				var estudiante = $.parseJSON(localStorage.getItem(clave));
				var notaEstudiante = parseFloat(estudiante.nota);
				var nombreEstudiante = estudiante.nombre;
				if(notaEstudiante<notaBaja){
					notaBaja = notaEstudiante;
					estudianteBaja = nombreEstudiante;
				}
			}
			alert("El estudiante con la nota mas baja es: " + estudianteBaja + ", con " + notaBaja);
		}
	});
	//Funcion que cambia de color cuando el cursor se encuentra encima de un boton
	$("button").mouseenter(function(){
		$(this).css("background","#7BF085");
	});
	//Funcion que devuelve al color original un boton cuando el cursor ya no esta encima de el
	$("button").mouseleave(function(){
		$(this).css("background","#09B917");
	});
	//Funcion para borrar los datos digitados en los inputs de registro
	function borrarDatos(){
		$("#codigo").val("");
		$("#nombre").val("");
		$("#nota").val("");
	}
});

