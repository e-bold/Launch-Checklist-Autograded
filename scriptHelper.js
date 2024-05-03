// Write your helper functions here!

require('cross-fetch/polyfill');


//Function that updates the HTML with the random planet's info 

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

    const missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML =

    `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `
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
         clean();
         prevent();
        } else if (pilotValidated === "Is a Number" || copilotValidated === "Is a Number") {
         alert("Please enter valid names for the Pilots");
         clean();
         prevent();
        } else if (fuelLevelValidated === "Not a Number" || cargoLevelValidated === "Not a Number"){
            alert("Please enter valid number for fuel level or cargo level");
            clean();
            prevent();
        };

    

    //Update pilot and copilot status

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    
    function clean(){
        list.style.visibility ="hidden"
        h2.innerHTML = "Awaiting Information Before Launch"
        h2.style.color = "black"
    }
        
    

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







//Gets planet list from the server
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response)
        return response.json()
     
    });
    
    return planetsReturned
 };

//Picks a random planet from the planet list

 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
  return planets[index]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;