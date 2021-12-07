// from data.js

 
console.log("app.js is loaded for HW14 Level 2");

var tableData = data;

// YOUR CODE HERE!



// Get a reference to the table body
var tbody = d3.select("tbody");

// Populate the table on the webpage
tableData.forEach(function(populateUFOTable){

    // console.log(populateUFOTable);
    var row = tbody.append("tr");
    
    Object.entries(populateUFOTable).forEach(function([key, value]) {
        
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });


});

// Now set up the filtersing
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.selectAll(".filter");

// Create event handlers 
button.on("click", runEnter);
form.on("change",runEnter);


function runEnter() {

    // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  var dateElement = d3.select("#datetime");
  var inputValueDate = dateElement.property("value");

  var cityElement = d3.select("#city");
  var inputValueCity = cityElement.property("value");

  var stateElement = d3.select("#state");
  var inputValueState = stateElement.property("value");

  var countryElement = d3.select("#country");
  var inputValueCountry = countryElement.property("value");

  var shapeElement = d3.select("#shape");
  var inputValueShape = shapeElement.property("value");


  // keep the table if event occurs but no values are entered
  if ((inputValueDate.length !== 0) || (inputValueCity.length !== 0) || (inputValueState.length !== 0) || (inputValueCountry.length !== 0) || (inputValueShape.length !== 0)) {
    tbody.html("");
  }

  //build an object of the form inputs
  let formArray = ["inputDate","inputCity", "inputState", "inputCountry", "inputShape"];
  let formValues = [inputValueDate, inputValueCity,inputValueState,inputValueCountry,inputValueShape];
  let formObject = {};

  for (let i = 0; i < formArray.length; i++){
      formObject[formArray[i]] = formValues[i];
  }

  // console.log("The objects entered are:");
  // console.log(formObject);
  // console.log(`Input City is: ${formObject.inputCity}`);
  // console.log(`inputCity length is: ${formObject.inputCity.length}`);


  //Now filter the data
  let filteredData = [];
  for (let j = 0; j < tableData.length; j++) {
    console.log(`tableData ${j}`);
    console.log(tableData[j]);
    if (((formObject.inputDate === tableData[j].datetime) || (formObject.inputDate.length === 0)) 
      && ((formObject.inputCity === tableData[j].city) || (formObject.inputCity.length === 0)) 
      && ((formObject.inputState === tableData[j].state) || (formObject.inputState.length === 0)) 
      && ((formObject.inputCountry === tableData[j].country) || (formObject.inputCountry.length === 0)) 
      && ((formObject.inputShape === tableData[j].shape) || (formObject.inputShape.length === 0))) {
      filteredData.push(tableData[j]);

    };
  };






  
      
      
      
      
      




  filteredData.forEach(function(rePopulateUFOTable){

    console.log(rePopulateUFOTable);
    var row = tbody.append("tr");
    
    Object.entries(rePopulateUFOTable).forEach(function([key, value]) {
        
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
  });


});

};

