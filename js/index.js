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

  bannerOption();
  function bannerOption() {
    var swiper = document.getElementById("swiper");
    var swiperItem = swiper.getElementsByClassName("swiperItem");
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    var index = 0;

    for (var i = 0; i < swiperItem.length; i++) {
      if (index == i) {
        swiperItem[i].style.opacity = 1;
      } else {
        swiperItem[i].style.opacity = 0;
      }
      swiperItem[i].style.transform =
        "translateX(" + (-i * swiperItem[0].offsetWidth) + "px)";
    }

    prev.onclick = function () {
      index--;
      changeImg();
    };

    next.onclick = function () {
      index++;
      changeImg();
    };

    function changeImg() {
      for (var j = 0; j < swiperItem.length; j++) {
        swiperItem[j].style.opacity = 0;
      }
      swiperItem[index].style.opacity = 1;
    }
  }
};
