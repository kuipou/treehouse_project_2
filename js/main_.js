// Stdent List
// When load hide but the first 10 student
// Program needs to calculate number of pages add them at the bottom
// When 2 is clicked 11 to 20 are shown 6 = 51 to 55


// declare var now 
var currentPage, maxItems, DOMstrings, studentList, totalPages;
console.log("App started");

currentPage = 1;
maxItems = 10;

// Store CSS class name in object for easier use later
DOMstrings = {
    studentContainer: ".student-list",
    studentItem: ".student-item",
    
};
// Convert NodeList into Array
studentList= [].slice.call(document.querySelectorAll(DOMstrings.studentItem));

// The total page is calculated by dividing the lenght of the Array divided by the max item (54 /10)
totalPages = Math.ceil(studentList.length / maxItems);


function showPage() {
    console.log(DOMstrings.studentContainer);
    // go fetch the container
    var innerList = document.querySelector(DOMstrings.studentContainer);
    console.log(innerList);
    // empty the list
    innerList.innerHTML = ""; 
    console.log(innerList);
    // Loop through
    console.log(Array.isArray(studentList));

    for (var i = 0; i < maxItems; i++) {
        innerList.createElement( studentList[i]);
    }
}

showPage();
console.log(`The total pages is ${totalPages}`);