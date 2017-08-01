// defining customer info wrapper to put new cust info divs in
const custInfoWrapper = document.getElementById("customer-info-wrapper");


// // creating new div to insert template into for each cust
// function createCustDiv () {
//   let custInfoDiv = document.createElement("div");
//   custInfoDiv.classList.add("customer-info");
//   custInfoWrapper.appendChild(custInfoDiv);
//   custInfoDiv.innerHTML = custInfoTemp;
// }

// creating variables to populate customer info template literal
let custPrefix = customers.results[0];


// // function to add custInfoTemp to customer info div
// function insertCustTemp () {
//   custInfoDiv.innerHTML = custInfoTemp;
// }

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






//
//
// let customers = data.results;
// let html = "";
// for (i = 0; i < customers.length; i++) {
//   var customer = customers[i];
//
//   html += newCustomer(customer.picture.medium, )
// }
//
// document.querySelector(".container").innerHTML = html;
//
// function newCustomer(img, first, last, email, street, city, state, postcode, tel, ssn) {
//   let post =
//   // paste template here
//   `<img src=${img} />
//   <div class="cust-info1">
//     <p class="nameFirst">${first}</p>
//     <p class="nameLast">${last}</p>
//     <p class="email">${email}</p>
//   </div>
//   <div class="cust-info2">
//     <p class="locStreet">${street}</p>
//     <p class="locGlobal">${city} ${state} ${postcode}</p>
//   </div>
//   <div class="cust-info3">
//     <p class="phone">${tel}</p>
//     <p class="ssn">${ssn}</p>
//   </div>`
//   return post;
// }
