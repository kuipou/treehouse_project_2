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
    paginationList: ".pagination ul li a"
  };
}

init();


function activePage(current) {
  let activePagination = document.querySelectorAll(".pagination ul li a");

  for (let i = 0; i <= activePagination.length; i++) {
    //    loop through the .pagination ul li a then remove every active found
    if (activePagination[i].classList.contains("active")) {
      console.log("was true added active");
      activePagination[i].classList.remove("active");
    }
    // Because the Array is 0 based Current page - 1 will = index
    // We add active to the to the current page
    activePagination[current - 1].classList.add("active");
  }
}

// Convert NodeList into Array
studentList = [].slice.call(document.querySelectorAll(DOMstrings.studentItem));

// The total page is calculated by dividing the lenght of the Array divided by the max item (54 /10)
totalPages = Math.ceil(studentList.length / maxItems);


function showPage(current, stdent) {
  console.log(DOMstrings.studentContainer);
  // go fetch the container
  var innerList = document.querySelector(DOMstrings.studentContainer);
  console.log(innerList);
  // empty the list
  innerList.innerHTML = "";
  console.log(innerList);

  // Loop through
  // for the current page ex 6 -1 =5 * the number of items is our counter
  for (i = (current - 1) * maxItems; i < current * maxItems; i++) {
    if (i < stdent.length) {
      innerList.append(stdent[i]);
    }
  }

}
function pagination() {
  let pagination = document.createElement('div');
  pagination.className = "pagination";
  let paginationList = document.createElement('ul');
  let paginationLi = "";

  for (let pages = 1; pages <= totalPages; pages++) {
    if (pages === currentPage) { paginationLi += `<li><a class="active" href="#">${pages}</a></li>`; }
    else { paginationLi += `<li><a href="#">${pages}</a></li>`; }

  }
  pagination.innerHTML = `<ul>${paginationLi}</ul>`;

  document.querySelector(".page").appendChild(pagination);
  var pgni = document.querySelectorAll(".pagination ul li a");

  for (let i = 0; i < totalPages; i++) {

    pgni[i].addEventListener("click", function (event) {
      //  active page throws an error but it dosen't affect anything though might be
      // the fact it can't find the same active class after live adding
      showPage(parseInt(event.target.textContent), studentList);
      activePage(parseInt(event.target.textContent));

    });
  }



}
pagination();

showPage(1, studentList);
console.log(`The total pages is ${totalPages}`);