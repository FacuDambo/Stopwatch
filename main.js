window.onload = function () {
    let segundos = 00;
    let milesimas = 00;
    let contador = 00;
    let idSegundos = document.getElementById("segundos");
    let idMilesimas = document.getElementById ("milesimas");
    let idContador = document.getElementById ("contador")
    let btnInicio = document.getElementById ("inicio");
    let btnPausa = document.getElementById ("pausa");
    let btnReiniciar = document.getElementById ("reiniciar");
    let Interval ;

    btnInicio.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }

    btnPausa.onclick = function () {
        clearInterval (Interval);
    }

    btnReiniciar.onclick = function () {
        clearInterval(Interval);
        segundos = "00";
        milesimas = "00";
        contador = "00"
        idSegundos.innerHTML = segundos;
        idMilesimas.innerHTML = milesimas;
        idContador.innerHTML = contador;
    }

    function startTimer () {
        milesimas++;

        if (milesimas <= 9) {
            idMilesimas.innerHTML = "0" + milesimas;
        }

        if (milesimas > 9) {
            idMilesimas.innerHTML = milesimas;
        }

        if (milesimas > 99) {
            segundos++;
            idSegundos.innerHTML = "0" + segundos;
            milesimas = 0;
            idMilesimas.innerHTML = "0" + 0;
        }

        if (segundos > 9) {
            idSegundos.innerHTML = segundos;
        }

        if (segundos / 60 === 1) {
            segundos = 0;
            contador++
            idContador.innerHTML = "0" + contador;
        }
    }
}

