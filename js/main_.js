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
for (let i = 0; i < 54; i++) {
    testarr.push(i);
}

// for the current page ex 6 -1 =5 * the number of items is our counter
for (i = (currentPage - 1) * maxItems; i < currentPage * maxItems; i++) {
    if (i < testarr.length) {
        console.log(testarr[i]);
    }
}
function activePage(current) {
    let activePagination = document.querySelectorAll(".pagination ul li a");

    for (let i = 0; i <= activePagination.length; i++) {
        console.log(activePagination[i]);
        if (activePagination[i].classList.contains("active")) {
            console.log("was true add active");
            activePagination[i].classList.remove("active");
        }
        activePagination[current - 1].classList.add("active");
    }
}

// Convert NodeList into Array
studentList = [].slice.call(document.querySelectorAll(DOMstrings.studentItem));

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
    // console.log(Array.isArray(studentList));

    for (i = (current - 1) * maxItems; i < current * maxItems; i++) {
        if (i < testarr.length) {
            innerList.append(stdent[i]);
        }
    }

}
function pagination() {
    let pagination = document.createElement('div');
    pagination.className = "pagination";
    // let paginationList = document.createElement('ul');
    let paginationLi = "";

    for (let pages = 1; pages <= totalPages; pages++) {
        if (pages === currentPage) { paginationLi += `<li><a class="active" href="#">${pages}</a></li>`; }
        else { paginationLi += `<li><a href="#">${pages}</a></li>`; }

    }
    pagination.innerHTML = `<ul>${paginationLi}</ul>`;

    document.querySelector(".page").appendChild(pagination);
    var pgni = document.querySelectorAll(".pagination ul li a");

    for (let i = 0; i < totalPages; i++) {
        // if 
        console.log("item contains active : " + pgni[i].classList.contains("active"));

        pgni[i].addEventListener("click", function (event) {
            // remove once to make sure that theres no active class
            console.log("li was clicked with a target of " + event.target.textContent);
            console.log("clicked " + parseInt(event.target.parentNode.className));
            showPage(parseInt(event.target.textContent), studentList);
            activePage(parseInt(event.target.textContent);

        });
    }
    // document.querySelector(".pagination ul li a").addEventListener("click", function (event) {
    //     console.log("li was clicked with a target of " + event.target.innerHTML);
    //     console.log("clicked");
    // });



}
pagination();

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


showPage(1, studentList);
console.log(`The total pages is ${totalPages}`);