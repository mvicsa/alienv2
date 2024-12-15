"use strict";
let search = document.querySelector(".search"),
  searchInput = document.querySelectorAll(".search-input input");
if (search) {
  searchInput.forEach((el) => {
    let searchResults = el.parentNode.parentNode.querySelector(".search-results"),
        searchClose = el.parentNode.querySelector(".group-input-close");
    let searchShow = () => {
      if (searchResults) {
        search.classList.add("show");
      }
    };
    let searchHide = () => {
      if (searchResults) {
        search.classList.remove("show");
      }
    };
    el.addEventListener("keyup", () => {
      if (el.value != "") {
        searchShow();
      } else {
        searchHide();
      }
    });
    searchClose.addEventListener("click", () => {
      searchHide();
    });
  });
}