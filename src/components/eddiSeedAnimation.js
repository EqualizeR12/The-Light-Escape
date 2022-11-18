"use strict";

function seedEddiAnimation() {
  let seed = document.querySelector(".descr-info__sid");
  let eddi = document.querySelector(".descr-info__eddi");

  let isMobile = window.innerWidth <= 450;
  let positionScroll;

  window.addEventListener("scroll", () => {
    positionScroll =
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100;
   
      //for mobile
    if (isMobile) {
      seed.style.marginRight = "700px";
      seed.style.opacity = "0";
      seed.style.transition = "1s";

      eddi.style.marginLeft = "700px";
      eddi.style.opacity = "0";
      eddi.style.transition = "1s";

      if (positionScroll > 27) {
        seed.style.marginRight = "0px";
        seed.style.opacity = "1";
      }

      if (positionScroll > 57) {
        eddi.style.marginLeft = "0px";
        eddi.style.opacity = "1";
      }
      // console.log(positionScroll, isMobile, "mobile device");
      return
    } else {
      seed.style.marginRight = "700px";
      seed.style.opacity = "0";
      seed.style.transition = "1s";
      eddi.style.marginLeft = "700px";
      eddi.style.opacity = "0";
      eddi.style.transition = "1s";
      console.log(positionScroll, isMobile, "desctop device");
    }
    
    //for desctop
    if (positionScroll > 75 && !isMobile) {
      seed.style.marginRight = "0px";
      seed.style.opacity = "1";

      eddi.style.marginLeft = "0px";
      eddi.style.opacity = "1";
    }

    if (positionScroll < 76) {
      seed.style.marginRight = "700px";
      seed.style.opacity = "0";

      eddi.style.marginLeft = "700px";
      eddi.style.opacity = "0";
    }

    // console.log(positionScroll, isMobile);
  });
}

module.exports = seedEddiAnimation;
