"use strict";
var Client;
(function (Client) {
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    const myForm = document.getElementById("form");
    const sendBtn = document.getElementById("sendBtn");
    sendBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    console.log(myForm, sendBtn);
    async function sendForm() {
        let formData = new FormData(myForm);
        let query = new URLSearchParams(formData);
        let urlWithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
        document.getElementById("response").innerText = responseText;
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map