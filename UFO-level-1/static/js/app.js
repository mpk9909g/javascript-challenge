// from data.js

 
console.log("app.js is loaded for HW14");

var tableData = data;
console.log(tableData);
// YOUR CODE HERE!



// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach(function(populateUFOTable){

    console.log(populateUFOTable);
    var row = tbody.append("tr");
    
    Object.entries(populateUFOTable).forEach(function([key, value]) {
        
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });


});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);
  if (inputValue.length !== 0) {
      tbody.html("");
  }

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

