// HTML REFERENCES

const inputY = document.getElementById("yearr");
const inputM = document.getElementById("monthh");
const inputD = document.getElementById("dayy");

const imgEnter = document.getElementById("jsimg")

const resultY = document.getElementById("y");
const resultM = document.getElementById("m");
const resultD = document.getElementById("d");
// HTML REFERENCES




inputD.addEventListener("input", () => {
    const numero = parseFloat(inputD.value);

    if (!isNaN(numero)) {
        console.log("Número ingresado:", numero);
    }
    if ((numero < 1) || (numero > 31)) {
        alert("Ingrese numero valido");
        inputD.value = 1;
    };
    return numero;
});

inputM.addEventListener("input", () => {
    const numeroM = parseFloat(inputM.value);

    if (!isNaN(numeroM)) {
        console.log("Número ingresado:", numeroM);
    }
    if ((numeroM < 1) || (numeroM > 12)) {
        alert("Ingrese numero valido");
        inputM.value = 1;
    };
    return numeroM;
});

inputY.addEventListener("input", () => {
    const numeroY = parseFloat(inputY.value);

    if (!isNaN(numeroY)) {
        console.log("Número ingresado:", numeroY);

    }
    if ((numeroY < 1) || (numeroY > 2024)) {
        alert("Ingrese numero valido");
        inputY.value = 1;
    };


});

imgEnter.addEventListener("click", (numeroY, numeroM, numero) => {
    numeroY = parseFloat(inputY.value);
    numeroM = parseFloat(inputM.value);
    numero = parseFloat(inputD.value);

    const meses28 = 28;
    const meses29 = 29;
    const meses30 = 30;
    const meses31 = 31;

    let fechaHoy = new Date();
    let año = fechaHoy.getFullYear() - numeroY;
    let mes = (fechaHoy.getMonth() + 1) - numeroM;
    let dia = fechaHoy.getDate() - numero;

    resultY.innerHTML = año;
    resultM.innerHTML = mes;
    resultD.innerHTML = dia;


})

