"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var Server;
(function (Server) {
    const hostname = "127.0.0.1";
    const port = 3000;
    // Initialisierung
    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        // Header für Rückgabe
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Origin", "*");
        // Routing
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) {
            case "/":
                response.write("Server erreichbar");
                break;
            case "/convertDate":
                let date = url.searchParams.get("date").toString();
                console.log(date);
                const separateDate = date.split("-");
                const dateTextObject = "Tag: " + separateDate[2] + " | Monat: " + separateDate[1] + " | Jahr: " + separateDate[0];
                response.write(dateTextObject);
                break;
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
})(Server || (Server = {}));
// Mit "node server/server.js" in der Kommandozeile ausführen
//# sourceMappingURL=server.js.map