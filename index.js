
//zvolenie rasovych atributov
/*
    rasa: "rolnik",
    sila: "0",
    obratnost: "0",
    zrucnost: "0",
    vola: "0",
    intelignecia: "0",
    charizma: "0",
*/
const rasove_atributy_data = [
{
    id: "0",
    rasa: "rolnik",
    sila: "0",
    obratnost: "0",
    zrucnost: "0",
    vola: "0",
    intelignecia: "0",
    charizma: "0",
}, {
    id: "1",
    rasa: "clovek",
    sila: "0",
    obratnost: "0",
    zrucnost: "0",
    vola: "0",
    intelignecia: "0",
    charizma: "0",
}, 
{
    id: "2",
    rasa: "horal",
    sila: "1",
    obratnost: "0",
    zrucnost: "0",
    vola: "1",
    intelignecia: "-1",
    charizma: "-1",
}, 
{
    id: "3",
    rasa: "elf",
    sila: "-1",
    obratnost: "1",
    zrucnost: "1",
    vola: "-2",
    intelignecia: "1",
    charizma: "1",
}, 
{
    id: "4",
    rasa: "elf_zeleny",
    sila: "-1",
    obratnost: "1",
    zrucnost: "0",
    vola: "-1",
    intelignecia: "1",
    charizma: "1",
}, {
    id: "5",
    rasa: "elf_temny",
    sila: "0",
    obratnost: "0",
    zrucnost: "0",
    vola: "0",
    intelignecia: "1",
    charizma: "0",
}, {
    id: "6",
    rasa: "trpaslik",
    sila: "1",
    obratnost: "-1",
    zrucnost: "0",
    vola: "2",
    intelignecia: "-1",
    charizma: "-2",
}, {
    id: "7",
    rasa: "trpaslik_lesny",
    sila: "1",
    obratnost: "-1",
    zrucnost: "0",
    vola: "1",
    intelignecia: "-1",
    charizma: "-1",
}, {
    id: "8",
    rasa: "trpaslik_horsky",
    sila: "2",
    obratnost: "-1",
    zrucnost: "0",
    vola: "2",
    intelignecia: "-2",
    charizma: "-2",
}, {
    id: "9",
    rasa: "hobit",
    sila: "-3",
    obratnost: "1",
    zrucnost: "1",
    vola: "0",
    intelignecia: "-1",
    charizma: "+2",
}, {
    id: "10",
    rasa: "kroll",
    sila: "+3",
    obratnost: "-2",
    zrucnost: "-1",
    vola: "1",
    intelignecia: "-1",
    charizma: "2",
}, {
    id: "11",
    rasa: "kroll_divoky",
    sila: "3",
    obratnost: "-1",
    zrucnost: "-2",
    vola: "2",
    intelignecia: "-3",
    charizma: "-2",
}, {
    id: "12",
    rasa: "skret",
    sila: "0",
    obratnost: "2",
    zrucnost: "0",
    vola: "-1",
    intelignecia: "0",
    charizma: "-2",
}, {
    id: "13",
    rasa: "skret_skurt",
    sila: "1",
    obratnost: "1",
    zrucnost: "-1",
    vola: "0",
    intelignecia: "0",
    charizma: "-2",
}, {
    id: "14",
    rasa: "skret_goblin",
    sila: "-1",
    obratnost: "2",
    zrucnost: "1",
    vola: "-2",
    intelignecia: "0",
    charizma: "-1",
}, 
];

const submitBtn = document.getElementById("submitBtn");

let pridaneAtributy = [
"0", "0", "0", "0", "0", "0"
];

updateZaklAtrib();

//spustenie v html prostrednictvom onChange 
function updateZaklAtrib(){
    // pri vybere v dropdown menu si treba davat pozor na id ci nie je niecoho ineho aby nedoslo k zamene napridlad s label alebo niecim co nema hodnotu a nedoslo tak teda k chybe unindetify error (zamena id labelu s id dropdown menu)
    let select = document.getElementById('rasa').value;
    //console.log(select);

    //najde v objekte s atributmi rasy vhodnu rasu a priradi ju do premennej hladanaRasa... tato premenna obsahuje vsetky potrebne atributy dalej sa spusti funcia setZaklAtrib() kde sa nastavia zakladne atributy kazdej rasy na fixnu hodnotu
    // const ulozenieoObjektu = nazovPola.find(({nazovPremennejKtoruHladamVPoli}) => nazovPremennejKtoruHladamVPoli === vybranaPremenna)
    const hladanaRasa = rasove_atributy_data.find(({rasa}) => rasa === select);

    setZaklAtrib(hladanaRasa);

    //pridanie dodatocnych atributov
    submitBtn.addEventListener("click",() => {
    //zozbieranie pridanych atributov
    const sila_pridana_ele = document.getElementById("sila_input").value;
    const obratnost_pridana_ele = document.getElementById("obratnost_input").value;
    const zrucnost_pridana_ele = document.getElementById("zrucnost_input").value;
    const vola_pridana_ele = document.getElementById("vola_input").value;
    const inteligencia_pridana_ele = document.getElementById("inteligencia_input").value;
    const charizma_pridana_ele = document.getElementById("charizma_input").value;

    //nastavenie hodnot v poli
    pridaneAtributy[0] = sila_pridana_ele;
    pridaneAtributy[1] = obratnost_pridana_ele;
    pridaneAtributy[2] = zrucnost_pridana_ele;
    pridaneAtributy[3] = vola_pridana_ele;
    pridaneAtributy[4] = inteligencia_pridana_ele;
    pridaneAtributy[5] = charizma_pridana_ele;

    //console.log(pridaneAtributy);
    });

    pridajAtributy(hladanaRasa);

}

//nastavenie zakladnych atributov
function setZaklAtrib(rasa){
    //ulozenie parametrov do premennej vo vnutry funkcie
    const hladanaRasaEle = rasa;

    //console.log(hladanaRasaEle);

    //premenenie hodnot atributov v html na zaklade zmeny rasy
    const sila_zaklad_ele = document.getElementById("sila_zaklad");
    sila_zaklad_ele.textContent = `${hladanaRasaEle.sila}`;

    const obratnost_zaklad_ele = document.getElementById("obratnost_zaklad");
    obratnost_zaklad_ele.textContent = `${hladanaRasaEle.obratnost}`;

    const zrucnost_zaklad_ele = document.getElementById("zrucnost_zaklad");
    zrucnost_zaklad_ele.textContent = `${hladanaRasaEle.zrucnost}`;

    const vola_zaklad_ele = document.getElementById("vola_zaklad");
    vola_zaklad_ele.textContent = `${hladanaRasaEle.vola}`;

    const inteligencia_zaklad_ele = document.getElementById("inteligencia_zaklad");
    inteligencia_zaklad_ele.textContent = `${hladanaRasaEle.intelignecia}`;

    const charizma_zaklad_ele = document.getElementById("charizma_zaklad");
    charizma_zaklad_ele.textContent = `${hladanaRasaEle.charizma}`;

}

console.log("pridane atributy: " + pridaneAtributy);

//scitanie vsetkych atributov
function pridajAtributy(hladanaRasa){
    //label v komplet atributov
    const sila_komplet_ele = document.getElementById("sila_komplet");
    const obratnost_komplet_ele = document.getElementById("obratnost_komplet");
    const zrucnost_komplet_ele = document.getElementById("zrucnost_komplet");
    const vola_komplet_ele = document.getElementById("vola_komplet");
    const inteligencia_komplet_ele = document.getElementById("inteligencia_komplet");
    const charizma_komplet_ele = document.getElementById("charizma_komplet");

    const hladanaRasa_ele = hladanaRasa;

    let sila = parseInt(pridaneAtributy[0])+parseInt(hladanaRasa_ele.sila);

    sila_komplet_ele.textContent = sila;

    let obratnost = parseInt(pridaneAtributy[1])+parseInt(hladanaRasa_ele.obratnost);
    obratnost_komplet_ele.textContent = obratnost;

    let zrucnost = parseInt(pridaneAtributy[2])+parseInt(hladanaRasa_ele.zrucnost);
    zrucnost_komplet_ele.textContent = zrucnost;

    let vola = parseInt(pridaneAtributy[3])+parseInt(hladanaRasa_ele.vola);
    vola_komplet_ele.textContent = vola;

    let intelignecia = parseInt(pridaneAtributy[4])+parseInt(hladanaRasa_ele.intelignecia);
    inteligencia_komplet_ele.textContent = intelignecia;

    let charizma = parseInt(pridaneAtributy[5])+parseInt(hladanaRasa_ele.charizma);
    charizma_komplet_ele.textContent = charizma;

}