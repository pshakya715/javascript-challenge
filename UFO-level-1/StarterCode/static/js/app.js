// from data.js
var tableData = data;

// Select tbody, sicne its rows are to be populated
var tbody = d3.select("tbody");

// Function to populate table
function buildTable(data) {
    // Get rid of stuff
    tbody.html("");
    // Loop through each object in tableData
    data.forEach((dataRow) => {
        // Append a row to the table body
        var row = tbody.append("tr");
        // Loop through each field in the object
        Object.values(dataRow).forEach((val) => {
            // Append a td to the row, inserting the value of the field
            var cell = row.append("td");
                cell.text(val);
            }
        );
        
    });
}

// Click handler function
function handleClick() {
    // Prevent the form from refreshing the page
    d3.event.preventDefault();
    // Select the datatime value
    var date = d3.select("#datetime").property("value");

    // Grab the city value from the filter
    var city = d3.select("#city").property("value");

    var country = d3.select("#country").property("value");

    var state = d3.select("#state").property("value");

    var shape = d3.select("#shape").property("value");

    //Set tableData as the value for filteredData the basis of our replacement table
    let filteredData = tableData;

    // Check to see if a date was entered
    if (date) {
        // Filter the table date to the match date
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    if (city) {
        filteredData = filteredData.filter(row => row.city === city)
    }

    if (country) {
        filteredData = filteredData.filter(row => row.country === country)
    }

    if (state) {
        filteredData = filteredData.filter(row => row.state === state)
    }

    if (shape) {
        filteredData = filteredData.filter(row => row.c=shape === shape)
    }


    // Populate the new table based on the filtered data
    buildTable(filteredData);
}

// Attach an event listener to the form button
d3.selectAll("#filter-btn").on("Click", handleClick);

// Populate the table upon initialising page
buildTable(tableData);


