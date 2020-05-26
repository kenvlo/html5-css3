window.onload = function () {
  // search bar
  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", showKeyword, false);
  searchInput.addEventListener("blur", hideKeyword, false);
  searchInput.addEventListener("focus", showKeyword, false);

  function showKeyword() {
    if (searchInput.value !== "") {
      document.getElementById("searchSuggestion").style.display = "block";
    }
  }
  function hideKeyword() {
    document.getElementById("searchSuggestion").style.display = "none";
  }
};
