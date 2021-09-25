var btntranslate = document.querySelector("#btn-translate")

var txtinput = document.querySelector("#txt-input")

var output = document.querySelector("#output")


var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"


//Constructs query parameter

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text 
}

function errorHandler(error) {
    console.log("Error occurred: ",error)
}


btntranslate.addEventListener("click", function logTextValue() {

    fetch(getTranslationURL(txtinput.value))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
        })
    .catch(errorHandler)
    
})