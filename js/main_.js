// Stdent List
// When load hide but the first 10 student
// Program needs to calculate number of pages add them at the bottom
// When 2 is clicked 11 to 20 are shown 6 = 51 to 55


// declare var now 
let currentPage, maxItems, DOMstrings, studentList, totalPages;
console.log("App started");

function init() {
    currentPage = 1;
    maxItems = 10;
    // Store CSS class name in object for easier use later
    DOMstrings = {
        studentContainer: ".student-list",
        studentItem: ".student-item",

    };
}

init();


var testarr = [];
for( let i = 0; i < 54; i++) {
    testarr.push(i);
}

// for the current page ex 6 -1 =5 * the number of items is our counter

for (i = (currentPage - 1) * maxItems; i < currentPage * maxItems; i++) {
    if (i < testarr.length) {
        console.log(testarr[i]);
    }
}


// Convert NodeList into Array
studentList= [].slice.call(document.querySelectorAll(DOMstrings.studentItem));

// The total page is calculated by dividing the lenght of the Array divided by the max item (54 /10)
totalPages = Math.ceil(studentList.length / maxItems);


// function showPage(/* arguments here for page number and student list */) {
//     // first hide all students on the page
//     // Then loop through all students in our student list argument
//     // if student should be on this page number
//     // show the student
// }

function showPage(current, stdent) {
    console.log(DOMstrings.studentContainer);
    // go fetch the container
    var innerList = document.querySelector(DOMstrings.studentContainer);
    console.log(innerList);
    // empty the list
    innerList.innerHTML = ""; 
    console.log(innerList);
    // Loop through
    console.log(Array.isArray(studentList));

    for (i = (currentPage - 1) * maxItems; i < currentPage * maxItems; i++) {
        if (i < testarr.length) {
        innerList.append( studentList[i]);}
    }
}
function pagination(params) {
    
}
function appendPageLinks(/* take a student list as an argument */) {
    // determine how many pages for this student list 
    // create a page link section
    // “for” every page
    // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
    // Use the showPage function to display the page for the link clicked
    // mark that link as “active”
}


showPage();
console.log(`The total pages is ${totalPages}`);