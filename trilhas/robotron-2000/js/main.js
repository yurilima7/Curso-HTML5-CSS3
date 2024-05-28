const robotron = document.querySelector("#robotron");
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((element) => {
    element.addEventListener("click", (event) => {
        // manipulaDados(event.target.textContent, event.target.parentNode);
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatistica(event.target.dataset.peca);
    })
});

robotron.addEventListener("click", oi);

function oi() {
    console.log('oi');
}

// somar.addEventListener("click", () => {manipulaDados("somar")});

// subtrair.addEventListener("click", () => {manipulaDados("subtrair")});

function manipulaDados(operacao, controle) {
    // const peca = controle.querySelector(".controle-contador");
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
    console.log(pecas[peca]);

    estatisticas.forEach((element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
    });
}
