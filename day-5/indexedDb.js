let req = indexedDB.open("employees", 1);
let db;
req.addEventListener("success", function () {
  db = req.result;
});
req.addEventListener("error", function () {});

//database create hota hai ya fir version change(increment) hota hai
//tab jakr upgrade event chlta
//agr upgrade event call hota hai iske baad hi success event hoga
req.addEventListener("upgradeneeded", function () {
  //is event ke listener me jake hum apne collection bna sakte hai

  let db = req.result;
  db.createObjectStore("companyData", { keyPath: "eId" });
});

function addEmployee(name, add, phone) {
  let tx = db.transaction("companyData", "readwrite");
  let store = tx.objectStore("companyData");
  store.add({
    eId: Date.now(),
    name,
    address: add,
    phoneNo: phone,
  });
}

let nameInput = document.querySelector("[placeholder='Name']");
let addInput = document.querySelector("[placeholder='Address']");
let phoneInput = document.querySelector("[placeholder='Number']");
let submitBtn = document.querySelector(".submit");
let viewBtn = document.querySelector(".view");

submitBtn.addEventListener("click", function () {
  let name = nameInput.value;
  let add = addInput.value;
  let phone = phoneInput.value;
  addEmployee(name, add, phone);
});

function viewEmployees() {
  let tx = db.transaction("companyData", "readonly");
  let store = tx.objectStore("companyData");
  let req = store.openCursor();

  let sNo = 1;
  let tbody = document.querySelector("tbody");
  let table = document.querySelector("table");
  table.style.display = "block";

  req.addEventListener("success", function () {
    let cursor = req.result;
    if (cursor) {
      console.log(cursor.value);

      let tr = document.createElement("tr");
      tr.innerHTML = ` 
      <td>${sNo}</td>
      <td>${cursor.value.name}</td>
      <td>${cursor.value.address}</td>
      <td>${cursor.value.phoneNo}</td>
  `;
      tbody.append(tr);

      sNo++;

      cursor.continue();
    }
  });
}

viewBtn.addEventListener("click", function () {
  viewEmployees();
});
