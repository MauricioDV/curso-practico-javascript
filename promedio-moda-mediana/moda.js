const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Count={};

//Con el siguiente pedazo de código vemos cuantas veces se repite cierto número
lista1.map(//map ayuda a recorrer el objeto
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    // function(valorAcumulado, nuevoValor){
    //     valorAcumulado - nuevoValor;
    // }
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);//A Object.entries le podemos pasar como argumento el objeto que queremos convertir en Array

const moda = lista1Array[lista1Array.length - 1];

function moda()