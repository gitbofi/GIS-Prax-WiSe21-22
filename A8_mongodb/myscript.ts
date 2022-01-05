var selectedRow: any = null;
var eventKey: any = 0;

window.onload = requestArtists();

function onFormSubmit() {
    if (validate()) {
        var formData: any = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData: any = {};
    formData["artist"] = document.getElementById("artist").innerHTML;
    formData["price"] = document.getElementById("price").innerHTML;
    formData["location"] = document.getElementById("location").innerHTML;
    formData["date"] = document.getElementById("date").innerHTML;
    return formData;
}


function insertNewRecord(data: any) {
    var table: any = document.getElementById("event-list").getElementsByTagName("tbody")[0];
    var newRow: any = table.insertRow(table.length);
    var cell1: any = newRow.insertCell(0);
    cell1.innerHTML = data.artist;
    var cell2: any = newRow.insertCell(1);
    cell2.innerHTML = data.price;
    var cell3: any = newRow.insertCell(2);
    cell3.innerHTML = data.location;
    var cell4: any = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    var cell5: any = newRow.insertCell(4);
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

function onEdit(td: any) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("artist").innerHTML = selectedRow.cells[0].innerHTML;
    document.getElementById("price").innerHTML = selectedRow.cells[1].innerHTML;
    document.getElementById("location").innerHTML = selectedRow.cells[2].innerHTML;
    document.getElementById("date").innerHTML = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData: any) {
    selectedRow.cells[0].innerHTML = formData.artist;
    selectedRow.cells[1].innerHTML = formData.price;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.date;
}

function onDelete(td: any) {
    if (confirm("Are you sure to delete this event?")) {
        var row: any = td.parentElement.parentElement;
        document.getElementById("event-list").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    var isValid: boolean = true;
    if (document.getElementById("artist").innerHTML == "") {
        isValid = false;
        document.getElementById("artistValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("artistValidationError").classList.contains("hide"))
            document.getElementById("artistValidationError").classList.add("hide");
    }
    return isValid;
}

async function sendJSONStringWithPOST(
    url: RequestInfo,
    jsonString: string
): Promise<void> {
    let response: Response = await fetch(url, {
      method: "post",
      body: jsonString,
    });
}
  
async function requestArtists(): Promise<void> {
    let response: Response = await fetch(
        "http://localhost:3000/concerts"
    );
    let text: string = await response.text();
    console.log(JSON.parse(text));
}
  
async function test1() {
    await sendJSONStringWithPOST(
      "http://localhost:3000/concerts",
      JSON.stringify({
        artist: "Shibuyan Records",
        price: 23,
        location: "Stage 2",
        date: "18.01.22",
    })
    );
    await requestArtists();
  }
  
  test1();