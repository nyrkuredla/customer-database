// defining customer info wrapper to put new cust info divs in
const custInfoWrapper = document.getElementById("customer-info-wrapper");

// creating variables to populate customer info template literal
let custPrefix = customers.results[0];
const custInfoVars = [];
for (let i = 0; i < custPrefix.length; i++) {
  custPrefix = customers.results[i];
  custInfoVars
}

const image = custPrefix.picture.medium;
const nameFirst = custPrefix.name.first;
const nameLast = custPrefix.name.last;
const email = custPrefix.email;
const locStreet = custPrefix.location.street;
const locCity = custPrefix.location.city;
const locState = custPrefix.location.state;
const locPostcode = custPrefix.location.postcode;
const phone = custPrefix.phone;
const ssn = custPrefix.id.value;


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
    <p class="locGlobal">${locCity} ${locState} ${locPostcode}</p>
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
