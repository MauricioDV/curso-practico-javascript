// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
     const inputPrice = document.getElementById("InputPrice");
     const priceValue = Number(inputPrice.value);
    
   const inputDiscount = document.getElementById("InputDiscount");
   const discountValue = Number(inputDiscount.value);

     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

     const resultP = document.getElementById("ResultP");
     resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
 }

//Descuentos por cupones
// Implementtar cupon que tenga un descuento para ciertos productos

function onClickButtonPriceDiscountDos(){
    const cupones = ["plata","gold","platino"];

    const inputPrice = document.getElementById("inputPrecio");
    const priceValue = inputPrice.value;
    
    const inputCupon = document.getElementById("inputCupon");
    const couponValue = inputCupon.value;

    let descuento;

     switch(couponValue){
         case cupones[0]: 
             descuento = 15;
             break;
         case cupones[1]:
             descuento = 25;
             break;
         case cupones[2]:
             descuento = 50;
             break;
         default:
             descuento = 0;
             break;
     }
    
     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
     const resultPdos = document.getElementById("resultCupon");
     resultPdos.innerText = "El precio con descuento son: $" + precioConDescuento;   
}
