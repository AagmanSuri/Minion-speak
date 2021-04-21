var btnTranlate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandeler(error) {
    console.log("error occured", error);
    alert("Something went wrong with server ! try again after some time")
}

function clickHandeler() {
    //  output.innerText = txtinput.value + " " + "hi";
    var inputText = txtinput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => json.contents.translated)
        .then(translated => output.innerText = translated)
        .catch(errorHandeler)
}

btnTranlate.addEventListener("click", clickHandeler)