namespace Client {

    const url: string = "http://127.0.0.1:3000";
    const path: string = "/convertDate";

    const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("form");
    const sendBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendBtn");

    sendBtn.addEventListener("click", function (evt: Event) {
        evt.preventDefault();
        sendForm();
    });

    console.log(myForm, sendBtn);


    async function sendForm(): Promise<void> {

        let formData: FormData = new FormData(myForm);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlWithQuery: string = url + path + "?" + query.toString();


        let response: Response = await fetch(urlWithQuery);
        let responseText: string = await response.text();
        console.log(responseText);
        document.getElementById("response").innerText = responseText;
    }
}