// defining customer info wrapper to put new cust info divs in
const custInfoWrapper = document.getElementById("customer-info-wrapper");


// creating new template literals and populating with custInfo from customer data array
for (let i = 0; i < customers.results.length; i++) {
  custPrefix = customers.results[i];
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
    <div class="cust-name-email">
      <p class="name">${nameFirst} ${nameLast}</p>
      <p class="email">${email}</p>
    </div>
    <div class="cust-loc">
      <p class="locStreet">${locStreet}</p>
      <p class="locGlobal">${locCity} ${locState} ${locPostcode}</p>
      <p class="phone">${phone}</p>
    </div>
    <p class="ssn">${ssn}</p>
    </div>
  `
  let custInfoDiv = document.createElement("div");
  custInfoDiv.classList.add("customer-info");
  custInfoWrapper.appendChild(custInfoDiv);
  custInfoDiv.innerHTML = custInfoTemp;

}
