var selectedRow = null
var eventKey = 0;

window.onload = function checkLocalStorageData() {
    if (localStorage.getItem(eventKey) !== null) {
        var test = 0;
        for (var i = 0; i < localStorage.length; i++) {
            var readLocSt = readLocalStorageData(test);
            insertNewRecord(readLocSt);
            test++;
        }
    }
}

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
    formData["artist"] = document.getElementById("artist").value;
    formData["price"] = document.getElementById("price").value;
    formData["location"] = document.getElementById("location").value;
    formData["date"] = document.getElementById("date").value;
    saveToLocalStorage(formData);
    return formData;
}

function saveToLocalStorage(formData) {
    const eventDataJSON = JSON.stringify(formData);
    localStorage.setItem(eventKey, eventDataJSON);
    eventKey += 1;
}

function readLocalStorageData(test) {
    var localStorageObject = {};
    localStorageObject = JSON.parse(localStorage.getItem(test));
    var localStorageData = {};
    localStorageData["artist"] = localStorageObject.artist;
    localStorageData["price"] = localStorageObject.price;
    localStorageData["location"] = localStorageObject.location;
    localStorageData["date"] = localStorageObject.date;
    return localStorageData;

}

function insertNewRecord(data) {
    ;
    var table = document.getElementById("event-list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.artist;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.location;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("artist").value = "";
    document.getElementById("price").value = "";
    document.getElementById("location").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("artist").value = selectedRow.cells[0].innerHTML;
    document.getElementById("price").value = selectedRow.cells[1].innerHTML;
    document.getElementById("location").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.artist;
    selectedRow.cells[1].innerHTML = formData.price;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this event?')) {
        row = td.parentElement.parentElement;
        document.getElementById("event-list").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("artist").value == "") {
        isValid = false;
        document.getElementById("artistValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("artistValidationError").classList.contains("hide"))
            document.getElementById("artistValidationError").classList.add("hide");
    }
    return isValid;
}
