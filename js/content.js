chrome.runtime.onMessage.addListener((msg, callback, sendResponse) => {
    //console.log(message);
    switch(msg) {
        case "corrector":
            document.getElementById("dictat").spellcheck = true;
            sendResponse("culo")
            break;
        case "copiar":
            sendResponse({copiar: document.getElementById("dictat").value})
            break;
        default:
            sendResponse("culo")
    }
    if (msg.pegar) {
        document.getElementById("dictat").value = msg.pegar;
    }
});
