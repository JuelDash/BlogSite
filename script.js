//Search articles navigation
function searchArticle() {
  var searchInput = document.getElementById("searchInput").value;
  if (searchInput.trim() !== "") {
    // Navigate to the search page with the search query as a URL parameter
    if (searchInput === "Education" || searchInput == "education") {
      window.location.href = "search1.html";
    }
    if (searchInput === "Technology" || searchInput == "technology") {
      window.location.href = "search2.html";
    }
    if (searchInput === "Literature and Writing") {
      window.location.href = "search3.html";
    }
    if (searchInput === "Art and Design") {
      window.location.href = "search4.html";
    }
  } else {
    alert("Please enter a search query.");
  }
}

//Enter key functionality for search key navigation
document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("searchInput");
  var searchButton = document.getElementById("searchButton");
  // Function to handle search when Enter key is pressed
  function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission if wrapped in a form element
      searchButton.click(); // Trigger click event of search button
    }
  }
  // Attach event listener for Enter key press in the input field
  searchInput.addEventListener("keypress", handleEnterKeyPress);
});