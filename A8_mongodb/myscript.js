"use strict";
var selectedRow = null;
var eventKey = 0;
window.onload = requestArtists();
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["artist"] = document.getElementById("artist").innerHTML;
    formData["price"] = document.getElementById("price").innerHTML;
    formData["location"] = document.getElementById("location").innerHTML;
    formData["date"] = document.getElementById("date").innerHTML;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("event-list").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.artist;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.location;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("artist").innerHTML = "";
    document.getElementById("price").innerHTML = "";
    document.getElementById("location").innerHTML = "";
    document.getElementById("date").innerHTML = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("artist").innerHTML = selectedRow.cells[0].innerHTML;
    document.getElementById("price").innerHTML = selectedRow.cells[1].innerHTML;
    document.getElementById("location").innerHTML = selectedRow.cells[2].innerHTML;
    document.getElementById("date").innerHTML = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.artist;
    selectedRow.cells[1].innerHTML = formData.price;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.date;
}
function onDelete(td) {
    if (confirm("Are you sure to delete this event?")) {
        var row = td.parentElement.parentElement;
        document.getElementById("event-list").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    var isValid = true;
    if (document.getElementById("artist").innerHTML == "") {
        isValid = false;
        document.getElementById("artistValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("artistValidationError").classList.contains("hide"))
            document.getElementById("artistValidationError").classList.add("hide");
    }
    return isValid;
}
async function sendJSONStringWithPOST(url, jsonString) {
    let response = await fetch(url, {
        method: "post",
        body: jsonString,
    });
}
async function requestArtists() {
    let response = await fetch("http://localhost:3000/concerts");
    let text = await response.text();
    console.log(JSON.parse(text));
}
async function test1() {
    await sendJSONStringWithPOST("http://localhost:3000/concerts", JSON.stringify({
        artist: "Shibuyan Records",
        price: 23,
        location: "Stage 2",
        date: "18.01.22",
    }));
    await requestArtists();
}
test1();
//# sourceMappingURL=myscript.js.map