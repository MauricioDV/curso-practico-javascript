/*function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;
}

const lista1 = [
    100, 200, 500, 400000000
];

//En la mediana puede que nuestra lista sea par o impar
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if(numerito % 2 === 0){
        return true; //es par
    }else{
        return false;
    }
}

// if (lista1 es par?){
//     //necesitamos dos elementos:
//     //el promedio
//     //la mediana
// else(){
//     //posicion mitadlista1 dentro lsita1
//     //->mediana
// }

let mediana;

if(esPar(lista1.lenght)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,]);
    mediana = promedioElemento1y2;
}else{
    mediana = lista1[mitadLista1];
}
*/

function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        });
            const promedioLista=sumaLista/lista.length;
            return promedioLista;
}

const lista1=[100,200,500,400000000,];
lista1.sort(function(a,b){ //.sort nos ayuda a ordenar elementos, pero tiene un problema que solo toma el primer digito. por ello creamos la funcion para resolver ese problemita.
    return a - b;
});



const mitadLista1=parseInt(lista1.length/2);

function esPar(numerito){
    if(numerito%2===0){
        return true;
    }else{
        return false;
    }}

let mediana;
if(esPar(lista1.length)){
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1];
    const promedioElemento1y2=calcularMediaAritmetica([elemento1,elemento2,]);
    mediana=promedioElemento1y2;
}else{mediana=lista1[mitadLista1];
}