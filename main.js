// defining customer info wrapper to put new cust info divs in
const custInfoWrapper = document.getElementById("customer-info-wrapper");

// creating array to populate customer info template literal
let info = customers.results[i];
let custInfoVars = [];

// setting array to populate customer info temp literal

// creating template literal
const custInfoTemp = `
  <img src=${image} />
  <div class="cust-info1">
    <p class="nameFirst">${nameFirst}</p>
    <p class="nameLast">${nameLast}</p>
    <p class="email">${email}</p>
  </div>
  <div class="cust-info2">
    <p class="locStreet">${locStreet}</p>
    <p class="locGlobal">${locGlobal}</p>
  </div>
  <div class="cust-info3">
    <p class="phone">${phone}</p>
    <p class="ssn">${ssn}</p>
  </div>
`

// function to add custInfoTemp to customer info div
function insertCustTemp () {
  custInfoWrapper.innerHTML = custInfoTemp;
}

insertCustTemp();

// creating new template literals and populating with custInfo from customer data array
