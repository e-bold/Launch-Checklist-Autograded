// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function(event) {
   
    
    
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        
        event.preventDefault();

        const pilotInput = document.getElementById('pilotName').value;
        const copilotInput = document.querySelector("input[name=copilotName]").value;
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        const cargoLevelInput = document.querySelector("input[name=cargoMass]").value;
        const faultyList = document.getElementById("faultyItems")


        console.log( copilotInput, "pilot")
        formSubmission(document, faultyList, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);
    })



    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myfetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });