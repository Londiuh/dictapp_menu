document.getElementById("activarCorrector").addEventListener("click", function() {
    enviarMsg("corrector")
});

document.getElementById("copiar").addEventListener("click", function() {
    enviarMsg("copiar")
});

document.getElementById("pegar").addEventListener("click", function() {
    var txt = document.getElementById("pegarTxt").value;
    enviarMsg({pegar: txt})
});


function enviarMsg(msg) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {
            if (response.copiar) {
                document.getElementById("copiarTxt").value = response.copiar;
                document.getElementById("copiarTxt").select();
                document.execCommand("copy", false, null);
            }
        });
    });
}
