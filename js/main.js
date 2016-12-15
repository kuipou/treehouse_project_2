console.log("hello");


// Sets up the pagination for the function since initially we are on the first
// page upon loading the value is one 
var currentPage =  1;
var maxItems     = 10;

// Get the total number of student node  and store the students in a array
// Might want to use a object
var student_list = document.querySelector('.student-list');
var students = document.getElementsByClassName('student-item cf');
var teststu = document.querySelectorAll('.student-item.cf');
console.log(students.length);

console.log(students[0]);

// Get the number of pages we'll need

var totalPages = Math.ceil(students.length / maxItems);

console.log(totalPages);

student_list.innerHTML = "";

function pagination () {
  pagin = document.createElement("<div class="pagination">");

}

for (var i = 0; i < currentPage.length; i++) {
  currentPage[i];
}

pagination();