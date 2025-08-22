// Henter inn knappene fra HTML
const steinKnapp = document.querySelector('#stein');
const saksKnapp = document.querySelector('#saks');
const papirKnapp = document.querySelector('#papir');
// Henter inn id fra dittValg,datamaskinensValg og resultat
const visDittValg = document.querySelector('#dittValg');
const visDatamaskinensValg = document.querySelector('#datamaskinensValg');
const visResultat = document.querySelector('#resultat');

// Lager en variabel for ditt valg
// Bruker let istedenfor const siden variabelen kan endres
let dittValg;

// Lager en array for valg
const valg = ['stein', 'saks', 'papir'];

// Funksjon for hver knapp som trykkes

// Stein
function velgStein() {
  dittValg = 'stein';

  datamaskinensValg();
}

steinKnapp.addEventListener('click', velgStein);

// Saks
function velgSaks() {
  dittValg = 'saks';

  datamaskinensValg();
}

saksKnapp.addEventListener('click', velgSaks);

// Papir
function velgPapir() {
  dittValg = 'papir';

  datamaskinensValg();
}

papirKnapp.addEventListener('click', velgPapir);

// Funksjon for
function datamaskinensValg() {
  // Her velger tallet tilfeldig mellom 0, 1 og 2.
  let dataTall = valg[Math.floor(Math.random() * 3)];

  // Viser hva bruker og datamaskinen har valgt i HTML
  visDittValg.innerHTML = dittValg;
  visDatamaskinensValg.innerHTML = dataTall;

  // Lager betingelser som viser hva resultatet blir
  if (dittValg === dataTall) {
    visResultat.innerHTML = 'Det ble uavgjort!'
  }
  else if (dittValg === 'stein' && dataTall === 'saks') {
    visResultat.innerHTML = 'Du vant!'}

  else if (dittValg === 'saks' && dataTall === 'papir') {
    visResultat.innerHTML = 'Du vant!'}

  else if (dittValg === 'papir' && dataTall === 'stein') {
    (visResultat.innerHTML = 'Du vant!')}

  else {visResultat.innerHTML = 'Du tapte..'};
};
