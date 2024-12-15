"use strict";

// Data Toggle On Hover
// let dataToggles = document.querySelectorAll("[data-toggle]");
// if (dataToggles) {
//   dataToggles.forEach((el) => {
//     // Dropdown On Hover
//     if (el.getAttribute("data-toggle") === "dropdown-hover") {
//       el.addEventListener("mouseover", () => {
//         el.parentNode.classList.add("active");
//       });
//       el.parentNode.children[1].addEventListener("mouseover", () => {
//         el.parentNode.classList.add("active");
//       });
//       el.parentNode.addEventListener("mouseout", () => {
//         el.parentNode.classList.remove("active");
//       });
//     }
//   });
// }

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  let tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
    trigger: "hover",
  });
});

// Sidebars
let menuToggle = document.querySelector(".menu-toggle"),
  leftSidebarSM = document.querySelector(".left-sidebar-sm"),
  leftSidebarLG = document.querySelector(".left-sidebar-lg"),
  leftSidebarMob = document.querySelector(".left-sidebar-mob"),
  leftSidebarMobToggle = document.querySelector(".mobile-menu-toggle"),
  messagesBox = document.querySelector(".messages-box"),
  messagesItems = document.querySelectorAll(".messages-box-item"),
  messagesBoxBtn = document.querySelector(".messages-box-button"),
  chatBox = document.querySelector(".chat-box"),
  chatBoxBack = document.querySelector(".chat-box-back");

let containerOP = () => {
  let container = document.querySelector(".container-box");
  if (messagesBox.classList.contains("show") && leftSidebarLG.classList.contains("show")) {
    container.style.left = "0";
  } else if (messagesBox.classList.contains("show")) {
    container.style.left = "-100px";
  } else if (leftSidebarLG.classList.contains("show")) {
    container.style.left = "100px";
  } else {
    container.style.left = "0";
  }
};

// Left Sidebar
if (leftSidebarSM) {
  menuToggle.onclick = () => {
    menuToggle.classList.toggle("active");
    leftSidebarSM.classList.toggle("hide");
    leftSidebarLG.classList.toggle("show");
    containerOP();
  };
}

// Left Sidebar Mobile
if (leftSidebarMob) {
  let leftSidebarMobClose = leftSidebarMob.querySelector(".left-sidebar-mob-close"),
      leftSidebarMobOverlay = leftSidebarMob.querySelector(".overlay");
  leftSidebarMobToggle.onclick = () => {
    leftSidebarMob.classList.add("show");
  };
  leftSidebarMobClose.onclick = leftSidebarMobOverlay.onclick = () => {
    leftSidebarMob.classList.remove("show");
  };
}

// Message Box
if (messagesBox) {
  messagesBoxBtn.onclick = () => {
    messagesBox.classList.toggle("show");

    if (chatBox.classList.contains("show")) {
      chatBox.classList.remove("show");
    }

    containerOP();
  };
}

// Chat Box
if (messagesItems) {
  messagesItems.forEach((el) => {
    el.onclick = () => {
      chatBox.classList.add("show");
      messagesBox.classList.add("show");
      containerOP();
    };
  });
}

if (chatBoxBack) {
  chatBoxBack.onclick = () => {
    chatBox.classList.remove("show");
  };
}

// Social SwiperJS
const swiperSocial = document.querySelectorAll(".socialSwiper");
if (swiperSocial) {
  swiperSocial.forEach((ele) => {
    var swiper = new Swiper(ele, {
      slidesPerView: 'auto',
      autoHeight: true,
      grabCursor: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ele.parentNode.querySelector(".swiper-next"),
        prevEl: ele.parentNode.querySelector(".swiper-prev"),
      }
    });
    function swiperAutoOP() {
      if (swiper.allowSlideNext === false && swiper.allowSlidePrev === false) {
        swiper.el.parentNode.classList.add("swiper-autowidth");
      } else {
        swiper.el.parentNode.classList.remove("swiper-autowidth");
      }
    }
    swiperAutoOP();
    swiper.on('resize', function () {
      swiperAutoOP();
    });
  });
}

// UserNav SwiperJS
const swiperUserNav = document.querySelector(".userNavSwiper");
if (swiperUserNav) {
  var swiper = new Swiper(swiperUserNav, {
    grabCursor: true,
    navigation: {
      nextEl: swiperUserNav.parentNode.querySelector(".swiper-next"),
      prevEl: swiperUserNav.parentNode.querySelector(".swiper-prev"),
    },
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      },
      1400: {
        slidesPerView: 6
      }
    }
  });
}
// Comments DropUp Optimization
let comments = document.querySelectorAll(".post-comment"),
    dropUpOP;
dropUpOP = () => {
  if (comments) {
    comments.forEach((el) => {
      let dropUp = el.querySelector(".dropdown-box-up");
      if (dropUp.getBoundingClientRect().left < el.getBoundingClientRect().left + 150) {
        dropUp.classList.add("dropdown-box-start");
      } else if (dropUp.getBoundingClientRect().left > el.getBoundingClientRect().left + 150) {
        dropUp.classList.remove("dropdown-box-start");
      }
    });
  }
}
dropUpOP();
window.addEventListener("resize", dropUpOP);
window.addEventListener("scroll", dropUpOP);

// Post SwiperJS
let postImages = document.querySelectorAll(".post-slider");
if (postImages) {
  postImages.forEach((post) => {
    let swiperPost = post.querySelector(".postSwiper"),
        swiperPopPost = post.querySelector(".postPopSwiper"),
        swiperPopup = post.querySelector(".popup"),
        swiperPopupPosts = swiperPopup.querySelectorAll(".post");

    var swiper1 = new Swiper(swiperPost, {
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper2 = new Swiper(swiperPopPost, {
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 20,
      lazy: true,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
    if (swiperPopupPosts) {
      let swiperPostImages = post.querySelectorAll(".post-body .post-image");
      swiperPostImages.forEach((image, id) => {
        image.addEventListener("click", () => {
          swiper2.slideTo(id);
          for (var i = 0; i < swiperPopupPosts.length; i++) {
            swiperPopupPosts[i].classList.remove("show");
          }
          swiperPopupPosts[id].classList.add("show");
          swiperPopup.classList.add("show");
          document.body.classList.add("overflow-hidden");
          dropUpOP();
        });
      });
    }
    swiper2.on('slideChange', function () {
      for (var i = 0; i < swiperPopupPosts.length; i++) {
        swiperPopupPosts[i].classList.remove("show");
      }
      swiperPopupPosts[swiper2.activeIndex].classList.add("show");
      dropUpOP();
    });
  });
}

// Popup
let popup = document.querySelectorAll(".popup");
if (popup) {
  popup.forEach((el) => {
    let popupClose = el.querySelector(".popup-close");
    popupClose.onclick = () => {
      el.classList.remove("show");
      document.body.classList.remove("overflow-hidden");
      if (el.classList.contains("popup-video")) {
        el.querySelector("video").pause();
      }
    };
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        el.classList.remove("show");
        document.body.classList.remove("overflow-hidden");
        if (el.classList.contains("popup-video")) {
          el.querySelector("video").pause();
        }
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target.closest(".popup") && !e.target.closest(".popup-inner")) {
        el.classList.remove("show");
        document.body.classList.remove("overflow-hidden");
        if (el.classList.contains("popup-video")) {
          el.querySelector("video").pause();
        }
      }
    });
  });
}

// Popup Btn
let popupBtn = document.querySelectorAll("[data-popup]");
if (popupBtn) {
  popupBtn.forEach((el) => {
    let popupTarget = document.querySelector(el.getAttribute("data-popup-target"));
    el.onclick = () => {
      popupTarget.classList.add("show");
      document.body.classList.add("overflow-hidden");
      if (popupTarget.classList.contains("popup-video")) {
        popupTarget.querySelector("video").play();
      }
    };
  });
}

// Input Group With Times
let inputGroup = document.querySelectorAll(".group-input input");
if (inputGroup) {
  inputGroup.forEach((el) => {
    let inputGroupClose = el.parentNode.querySelector(".group-input-close");
    el.addEventListener("keyup", () => {
      if (el.value != "") {
        el.parentNode.classList.add("show");
      } else {
        el.parentNode.classList.remove("show");
      }
    });
    inputGroupClose.addEventListener("click", () => {
      el.value = "";
      el.parentNode.classList.remove("show");
    });
  });
}

// Form Float
let formFloat = document.querySelectorAll(".form-float");
if (formFloat) {
  formFloat.forEach((el) => {
    let formFloatInput = el.querySelector(".form-control"),
        formFloatLabel = el.querySelector(".form-float-text");
    formFloatInput.addEventListener("focusin", () => {
      el.classList.add("active");
    });
    formFloatInput.addEventListener("focusout", () => {
      if (formFloatInput.value === "" || formFloatInput.value === null) {
        el.classList.remove("active");
      }
    });
    formFloatLabel.onclick = () => {
      formFloatInput.focus();
    };
  });
}

// Reacts
let reactsAction = document.querySelectorAll(".reacts-action");
if (reactsAction) {
  reactsAction.forEach((el, id) => {
    el.onclick = () => {
      for (var i = 0; i < reactsAction.length; i++) {
        if (i !== id) {
          reactsAction[i].classList.remove("active");
        reactsAction[i].classList.remove("show");
        }
      }
      el.classList.toggle("active");
      el.classList.toggle("show");
    };
  });
  window.addEventListener("click", (e) => {
    if (!e.target.closest(".reacts-action")) {
      reactsAction.forEach((el) => {
        el.classList.remove("active");
        el.classList.remove("show");
      });
    }
  });
}

// Comment Reacts List Optimization
let commentActions = document.querySelectorAll(".post-comment-actions");
if (commentActions) {
  commentActions.forEach((el) => {
    let commentReacts = el.querySelector(".reacts"),
        reactActionList = el.querySelector(".reacts-action .reacts-action-list");
    if (commentReacts != null) {
      reactActionList.style.marginLeft = -(commentReacts.offsetWidth + 10) + "px";
      window.addEventListener("click", () => {
        reactActionList.style.marginLeft = -(commentReacts.offsetWidth + 10) + "px";
      });
    }
  });
}


// plyr.js
const player = document.querySelectorAll(".video-plyr");
player.forEach((el) => {
  new Plyr(el);
});