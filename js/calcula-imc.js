var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!validaPeso) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!validaAltura) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

  if (alturaEhValida && pesoEhValido) {  
        tdImc.textContent = calcaularImc(peso,altura);
    }
}

function validaPeso(peso){
    if (peso > 0 && peso < 1000){
     return true;
    } else {
    return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.0) {
            return true;
        } else {
            return false;
        }
    }

function calcaularImc(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

/*console.log(paciente);
console.log(tdPeso.textContent);
console.log(tdAltura.textContent);

console.log(peso/(altura*altura));
console.log(paciente.querySelector(".info-peso").textContent / (paciente.querySelector(".info-altura").textContent * paciente.querySelector(".info-altura").textContent))
console.log(tdPeso.textContent / (tdAltura.textContent * tdAltura.textContent));*/


