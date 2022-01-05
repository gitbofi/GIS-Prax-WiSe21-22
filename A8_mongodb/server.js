"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1";
const port = 3000;
const mongoUrl = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient = new mongo.MongoClient(mongoUrl);
async function dbFind(db, collection, requestObject, response) {
    let result = await mongoClient
        .db(db)
        .collection(collection)
        .find(requestObject)
        .toArray();
    // console.log(result, requestObject); // bei Fehlern zum Testen
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
}
// Initialisierung
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        case "/concertEvents": {
            await mongoClient.connect();
            switch (request.method) {
                case "GET":
                    await dbFind("concerts", "artist", {}, response);
                    break;
            }
            break;
        }
        case "POST":
            let jsonString = "";
            request.on("data", data => {
                jsonString += data;
            });
            request.on("end", async () => {
                mongoClient
                    .db("concerts")
                    .collection("artist")
                    .insertOne(JSON.parse(jsonString));
            });
            break;
    }
    break;
});
response.statusCode = 404;
response.end();
;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// Mit "node server/server.js" in der Kommandozeile ausführen
//# sourceMappingURL=server.js.map