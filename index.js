'use strict';

let cat;
let cat2;
let sb;
let multiplicador;
let sf;


cat = parseInt(prompt('Ingrese categoría (1, 2 o 3)'));

switch (cat) {
	case 1:
		sb = 1000;
		break;
	case 2:
		sb = 1500;
		break;
	case 3:
		sb = 2000;
		break;
}


cat2 = parseInt(prompt('Ingrese subcategoría (1=A, 2=B o 3=C)'));

if(cat2 == 1){
	multiplicador = 1.5
}else if( cat2 == 2){
	multiplicador = 2
}
else if( cat2 == 3){
	multiplicador = 2.5
}

sf = sb * multiplicador
alert(sf)
alert('Sueldo: ' +  sb +  ' sueldo multiplicado: ' + sb * multiplicador );
if(1500 >= sf ){
	alert('el rango es' +  'INICIAL');
}
else if(3001 >= sf){
	alert('el rango es' +  'INTERMEDIO');
}
else if(4001 <= sf){
	alert('el rango es' +  'AVANZADO');
}

document.write(`<p>${sf}</p>`);