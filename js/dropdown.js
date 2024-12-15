"use strict";
let dropdownBox = document.querySelectorAll(".dropdown-box");
if (dropdownBox) {
  dropdownBox.forEach((el) => {
    let dropdownBtn = el.querySelectorAll(".dropdown-box-title"),
      dropdownList = el.querySelectorAll(".dropdown-box-list"),
      dropdownItem = el.querySelectorAll(".dropdown-box-item");
  
    let closeAllDropdown = () => {
      document.querySelectorAll(".dropdown-box-title").forEach((element, id) => {
        element.classList.remove("active");
        document.querySelectorAll(".dropdown-box-list")[id].classList.remove("show");
        el.classList.remove("show");
      });
    };
  
    dropdownBtn.forEach((ele, id) => {
      ele.onclick = () => {
        if (ele.classList.contains("active") === false) {
          closeAllDropdown();
          el.classList.add("show");
          ele.classList.add("active");
          dropdownList[id].classList.add("show");
        } else {
          el.classList.remove("show");
          ele.classList.remove("active");
          dropdownList[id].classList.remove("show");
        }
  
        window.addEventListener("click", (e) => {
          if (!e.target.closest(".dropdown-box")) {
            el.classList.remove("show");
            ele.classList.remove("active");
            dropdownList[id].classList.remove("show");
          }
        });
      };

      if (el.classList.contains("dropdown-box-links") === true) {
        dropdownItem.forEach((link) => {
          link.onclick = () => {
            el.classList.remove("show");
            ele.classList.remove("active");
            dropdownList[id].classList.remove("show");
          };
        });
      }
  
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeAllDropdown();
        }
      });
  
    });
  });
}