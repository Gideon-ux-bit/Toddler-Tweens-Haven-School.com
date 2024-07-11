

document.addEventListener("DOMContentLoaded", function() {
    showPage(1); // Show the first page initially
});

function showPage(pageNumber) {
    const pages = document.querySelectorAll(".form-page");
    pages.forEach((page, index) => {
        page.classList.remove("active");
        if (index === pageNumber - 1) {
            page.classList.add("active");
        }
    });
}

function nextPage(pageNumber) {
    showPage(pageNumber);
}

function previousPage(pageNumber) {
    showPage(pageNumber);
}

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
