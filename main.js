/***********************************************************************************************************************
 *                                                   /* DESCRIZIONE:                                                   *
 *                    VISUALIZZARE IN PAGINA 5 NUMERI CASUALI. DA LÌ PARTE UN TIMER DI 30 SECONDI.                     *
 *                                               - CREARE UN ARRAY VUOTO                                               *
 *                                    - CREARE UNA FUNZIONE PER GENERARE NUM RANDOM                                    *
 *               - CICLO PER GENERARE 5 NUMERI CASUALI NELL'ARRAY / BONUS: CONTROLLARE CHE SIANO UNIVOCI               *
 *                                        - PUSHIAMO OGNI NUM NELL ARRAY VUOTO                                         *
 *                                       - STAMPIAMO I PAGINA I NUMERI GENERATI                                        *
 *                            - NASCONDO I NUMERI VISUALIZZATI CON IL CSS DOPO TOT SECONDI                             *
 *                                      - FAR COMPARIRE 5 PROMPT DOPO TOT SECONDI                                      *
 *                                                      2 IDEE :                                                       *
 * - IDEA 1: SALVARE IN UN ALTRO ARRAY I NUMERI SCRITTI DALL'UTENTE NEI PROMPT E CONTROLLARE QUALI E QUANTI NUMERI COINCIDANO CON L'ARRAY DEI NUM RANDOM *
 *         - IDEA 2: CONTROLLARE OGNI NUMERO CHE VIENE SCRITTO DALL'UTENTE È INCLUSO NELL'ARRAY DEI NUM RANDOM         *
 * DOPO 30 SECONDI I NUMERI SCOMPAIONO E L'UTENTE DEVE INSERIRE, UNO ALLA VOLTA, I NUMERI CHE HA VISTO PRECEDENTEMENTE, TRAMITE IL PROMPT(). *
 * DOPO CHE SONO STATI INSERITI I 5 NUMERI, IL SOFTWARE DICE QUANTI E QUALI DEI NUMERI DA INDOVINARE SONO STATI INDIVIDUATI. *
 *                                                CONSIGLI DEL GIORNO:                                                 *
 *                                            * PENSATE PRIMA IN ITALIANO.                                             *
 *                                     * DIVIDETE IN PICCOLI PROBLEMI LA CONSEGNA.                                     *
 *                   * INDIVIDUATE GLI ELEMENTI DI CUI AVETE BISOGNO PER REALIZZARE IL PROGRAMMA.*/                    /*
***********************************************************************************************************************/

let arrayNumeriCasuali = [];

let arrayNumeriUtente = [];

let array_numeri_indovinati = [];

let datiMemoria;

let h1 = document.getElementById("h1");

setTimeout(puliziaDisplay, 4000);

setTimeout(secondaFase, 4500);

displayNumeri();

/************
 * FUNZIONI *
 ************/

function numeroRandom(min, max) {

    let numeroRandom = Math.floor(Math.random() * (max - min + min)) + min;

    return numeroRandom;
}

function displayNumeri() {
    for (let k = 0; k < 5; k++) {
        let funcNumRandom = numeroRandom(0, 100);
        arrayNumeriCasuali.push(funcNumRandom);
    }

    h1.innerHTML = `Ricorda questi numeri: ${arrayNumeriCasuali}`;
}

function puliziaDisplay() {
    h1.innerHTML = ``;
}


function secondaFase() {

    let flag = false;

    for (let i = 0; i < 5; i++) {
        datiMemoria = parseInt(prompt("Quali numeri ti ricordi?"));

        arrayNumeriUtente.push(datiMemoria);

    }

    console.log(datiMemoria);
    console.log(arrayNumeriUtente);

    let y = 0;

    while (y < arrayNumeriUtente.length) {

        if (arrayNumeriCasuali == arrayNumeriUtente[y]) {
            console.log("indovinato")

            flag = true;
            break
        } else {
            console.log("non hai indovinato")
        }

        y++
    }

}



// while (i < listaInvitati.length) {

//     if (listaInvitati[i] == nuovoInvitato) {


//     }

//     i++
// }

// if (flag) {
//     console.log("divertiti");
// } else {
//     console.log("Non sei invitato");
// }
