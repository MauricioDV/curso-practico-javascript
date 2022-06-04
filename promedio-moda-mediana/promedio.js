/*
//Promedio
const lista1 =[
    100,
    200,
    300,
    500
];


let sumaLista1 = 0;
for(let i = 0; i < lista1.length ; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}//1100 es la suma de los elementos

const promedioLista1 = sumaLista1 / lista1.length; //suma de los elementos dividido entre la cantidad de elementos
*/

function calcularMediaAritmetica(lista){
    let sumaLista = 0;
    for(let i = 0; i < lista.length ; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;
}

// En consola llamamos a la función y le colocamos valores: calcularMediaAritmetica([1,14,151,25,15,100]) 
//51 es el promedio

/////////////////////////////////////////////////////////////
// Otra forma con el metodo reduce():
//Este metodo hará una operacion aritmetica de un elemento tras otros, por ejemplo en este caso sumará los dos primeros elementos y el resultado con el seguiente elemento y asi sucesivamente. Tendremos el mismo resultado que usando el for :)

function calcularMediaAritmeticaDos(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;
}