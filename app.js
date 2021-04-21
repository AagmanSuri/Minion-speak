var btnTranlate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector(".output");

function clickHandeler() {

    output.innerText = txtinput.value + " " + "hi";
}

btnTranlate.addEventListener("click", clickHandeler)