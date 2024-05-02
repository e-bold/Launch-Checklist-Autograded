// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 

 //Input Validater

 function validateInput(testInput) {
    
    if (testInput === ""){
        return("Empty")
    } else if (!isNaN(testInput)) {
        return("Is a Number")
    } else return("Not a Number")
 };


 
//Form Submission

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    const pilotValidated = validateInput(pilot);
    const copilotValidated = validateInput(copilot);
    const fuelLevelValidated = validateInput(fuelLevel);
    const cargoLevelValidated = validateInput(cargoLevel)

    const h2 = document.getElementById("launchStatus")

    let prevent = function (event){
        event.preventDefault();
    }

    //Validating if user entered correct datatype in the input field

    if(pilotValidated === "Empty" || copilotValidated === "Empty" || fuelLevelValidated === "Empty" || cargoLevelValidated === "Empty") {
         alert("Please make sure you enter a value for all the fields");
         prevent();
        } else if (pilotValidated === "Is a Number" || copilotValidated === "Is a Number") {
         alert("Please enter valid names for the Pilots");
         prevent();
        } else if (fuelLevelValidated === "Not a Number" || cargoLevelValidated === "Not a Number"){
            alert("Please enter valid number for fuel level or cargo level");
            prevent();
        };

    

    //Update pilot and copilot status

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    


    if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.style.color = "red"
    } else if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.style.color = "red"
    } else if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        h2.style.color = "red"
    } else {
        list.style.visibility = "visible";
        h2.innerHTML = "Shuttle is Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        h2.style.color = "green"
    } 


};








async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;