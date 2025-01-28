//state object
const state = {
  partyList: []
}
// const addParties = (partyname, partydate, partylocation, partydesc) => {
// // button to submit new parties to
// const partyButton = document.querySelectorAll(`button`);
// console.log(partyButton);
// }

// function w/ async get parties
const getParties = async() => {
  // variable to hold fetch of api objects
  const partiesList = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/events`);
  // variable to hold await and put into json object
  const jsonObjectReturn = await partiesList.json();
  // variable to hold results 
  const allParties = jsonObjectReturn.data;
  // sending results to state object
  state.partyList = allParties;
  renderParties();
}

const renderParties = () => {
  // Query selectors to grab different HTML elements
  const body = document.querySelector(`body`);
  const h2 = document.querySelector(`h2`);

  // erase ul to ready for new render
  // h2.innerHTML = ``;

  // through each party in partyList
  state.partyList.forEach((party) => {
    // create new elements to put onto the HTML
    const h2 = document.createElement(`h2`);
    const liDate = document.createElement(`li`);
    const liLocation = document.createElement(`li`);
    const pDescription = document.createElement(`p`);

    // put the name of the party in the h2 element 
    h2.innerText = party.name;
    liDate.innerText = `Date: ${party.date}`;
    liLocation.innerText = `Location: ${party.location}`;
    pDescription.innerText = `Description: ${party.description}`;

    // attach elements to the parent element
    body.append(h2);
    h2.append(liDate);
    h2.append(liLocation);
    h2.append(pDescription);
  })
}



// testing area
getParties();
// addParties(`Test`,`test`, `test`, `test`);