//Funciones Helpers (funciones que no son parte de la logica del negocio, pero si las requerimos para que funcione)
//Funcion para saber si es par o impar
function esPar(numerito){
    return(numerito % 2 === 0);  
 }

 function calcularMediaAritmetica(lista){
     const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        });
        const promedioLista=sumaLista/lista.length;
        return promedioLista;
    }
    
    //Calculadora de mediana
    //Funcion para calcular mediana de cualquier país
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){//Es par
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{//Es impar
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana general
//Array para los salarios
const salariosBol = bolivia.map(
    function(personita){
        return personita.salary;
    }
);
//Ordenar elementos
const salariosBolSorted = salariosBol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralBol = medianaSalarios(salariosBolSorted);

//Mediana del top 10%
const spliceStart = (salariosBolSorted.length * 90) / 100;
const spliceCount = salariosBolSorted.length - spliceStart;
const salariosBolTop10 = salariosBolSorted.splice(//método splice(recibe 2 argumentos. Ejemplo es como partir un pan, el primer parametro pone el cuchillo en la posicion donde elegimos y el segurndo argumento es decirlo cuantas tajadas hará)
spliceStart,
spliceCount,
);

const medianaTop10Bol = medianaSalarios(salariosBolTop10);


console.log({
    medianaGeneralBol,
    medianaTop10Bol,
});
