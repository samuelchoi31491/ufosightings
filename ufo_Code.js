// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
//{} is used to create an object.
var dataFilter = {};

// 2. Modify the event listner from this module so that it detects a "change" on each input element and calls the updatefilter() function


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // var datetimeElement = d3.select("#datetime");
    // var cityElement = d3.select("#city");
    // var stateElement = d3.select("#state");
    // var countryElement = d3.select("#country");
    // var shapeElement = d3.select("#shape");
    var element = d3.select(this).select("input");


    // 4b. Save the value that was changed as a variable.
    // var datetimeValue = datetimeElement.property("value");
    // var cityValue = cityElement.property("value");
    // var stateValue = stateElement.property("value");
    // var countryValue = countryElement.property("value");
    // var shapeValue = shapeElement.property("value");

    var changedValue = element.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    // var datetimeId = datetimeElement.attr("id");
    // var cityId = cityElement.attr("id");
    // var stateId = stateElement.attr("id");
    // var countryId = countryElement.attr("id");
    // var shapeId = shapeElement.attr("id");
    var changedId = element.attr("id");

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedValue) {
        dataFilter[changedId] = changedValue;
    }
    else {
        delete dataFilter[changedId];
    }
    // if (datetimeValue) {
    //   dataFilter[datetimeId] = datetimeValue;
    // }
    // else {
    //     delete dataFilter[datetimeId];
    // }
    // if (cityValue) {
    //   dataFilter[cityId] = cityValue;
    // }
    // else {
    //     delete 
    // }
    // if (stateValue) {
    //   filterData = filteredData.filter(row => row.state === stateValue);
    // }  
    // if (countryValue) {
    //   filterData = filteredData.filter(row => row.country === countryValue);
    // }
    // if (shapeValue) {
    //   filterData = filteredData.filter(row => row.shape === shapeValue);
    // }      



    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var filterData = tableData
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(dataFilter).forEach(([key, value])=>{
        filterData = filterData.filter(row => row[key] === value);
    })
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll(".filter").on("change",filterTable);
  
  // Build the table when the page loads
  buildTable(tableData);
