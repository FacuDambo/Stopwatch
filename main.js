window.onload = function () {
    let segundos = 00;
    let milesimas = 00;
    let idSegundos = document.getElementById("segundos");
    let idMilesimas = document.getElementById ("milesimas");
    let btnInicio = document.getElementById ("inicio");
    let btnPausa = document.getElementById ("pausa");
    let btnReiniciar = document.getElementById ("reiniciar");
    let Interval ;

    btnInicio.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer)
    }

    btnPausa.onclick = function () {
        clearInterval (Interval);
    }

    btnReiniciar.onclick = function () {
        clearInterval(Interval);
        segundos = "00";
        milesimas = "00";
        idSegundos.innerHTML = segundos;
        idMilesimas.innerHTML = milesimas;
    }

    function startTimer () {
        milesimas++;

        if (milesimas <= 9) {
            idMilesimas.innerHTML = "0" + milesimas;
        }

        if (milesimas > 9) {
            idMilesimas.innerHTML = milesimas
        }

        if (milesimas > 99) {
            console.log("segundos");
            segundos++;
            idSegundos.innerHTML = "0" + segundos;
            milesimas = 0;
            idMilesimas.innerHTML = "0" + 0;
        }

        if (segundos > 9) {
            idSegundos.innerHTML = segundos;
        }
    }
}

