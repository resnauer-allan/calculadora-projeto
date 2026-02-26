const capital = document.getElementById("capital");
const taxa = document.getElementById("taxa");
const tempo = document.getElementById("tempo");
const aporte = document.getElementById("aporte");

const montante = document.getElementById("montante");
const investido = document.getElementById("investido");
const juros = document.getElementById("juros");

const form = document.getElementById("form-calculo");

function calcular() {

    const C = parseFloat(capital.value) || 0;
    const i = (parseFloat(taxa.value) || 0) / 100;
    const t = parseFloat(tempo.value) || 0;
    const A = parseFloat(aporte.value) || 0;

    if (i === 0) {
        montante.innerHTML = "Informe uma taxa válida";
        return;
    }

    const M = C * (1 + i) ** t + A * (((1 + i) ** t - 1) / i);
    const totalInvestido = C + (A * t);
    const totalJuros = M - totalInvestido;

    montante.innerHTML = `R$ ${M.toFixed(2)}`;
    investido.innerHTML = `R$ ${totalInvestido.toFixed(2)}`;
    juros.innerHTML = `R$ ${totalJuros.toFixed(2)}`;
}

form.addEventListener("input", calcular);