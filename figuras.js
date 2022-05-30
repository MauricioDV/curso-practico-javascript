/*
///////////Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();
*/
console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();
/*
///////////Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " 
+ ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();
*/
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();
/*
///////////Código del círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
// const PI = 3.14159; PI Manualmemte
const PI = Math.PI; //Math herramienta que nos ayuda con matemáticas
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + Math.round(perimetroCirculo) + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + Math.round(areaCirculo) + "cm");

console.groupEnd
*/
console.group("Círculos");

const PI = Math.PI; //Math herramienta que nos ayuda con matemáticas

function diametroCirculo(radio){
    return radio *2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd

//Aqui interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;//Obtenemos el valor que el usuario escribio en el input
    const perimetro = perimetroCuadrado(value);//Llamamos a la función perimetroCuadrado y le pasamos como parámetro el valor de value
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;//Obtenemos el valor que el usuario escribio en el input
    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputLado2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputBase");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perímetro del triángulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputBase");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputAltura");
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert("El área del triángulo es: " + area);

}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es: " + perimetro);

}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El área del círculo es: " + area);
}


// const PI = Math.PI; //Math herramienta que nos ayuda con matemáticas

// function diametroCirculo(radio){
//     return radio *2;
// }

// function perimetroCirculo(radio){
//     const diametro = diametroCirculo(radio);
//     return diametro * PI;
// }

// function areaCirculo(radio){
//     return (radio * radio) * PI;
// }
