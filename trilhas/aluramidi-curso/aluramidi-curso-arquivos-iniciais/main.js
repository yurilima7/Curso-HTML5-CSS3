function tocaSom(audioID) {
    const elemento = document.querySelector(audioID);

    if (elemento === null) {
        alert('Elemento não encontrado!');
    } else if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Seletor não é audio!');
    }
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const audioID = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(audioID);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
