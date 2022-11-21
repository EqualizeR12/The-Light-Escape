"use strict";

function seedEddiAnimation() {
  let seed = document.querySelector(".descr-info__sid");
  let eddi = document.querySelector(".descr-info__eddi");

  let isMobile = window.innerWidth <= 450;
  let positionScroll;

  function controlAnimaton({
    className = seed,
    startPosition = "300px",
    marginDirection = true,
    opacity = "0",
    transition = "1s",
  }) {
    marginDirection
      ? (className.style.marginRight = startPosition)
      : (className.style.marginLeft = startPosition);
    className.style.opacity = opacity;
    className.style.transition = transition;
  }

  window.addEventListener("scroll", () => {
    positionScroll =
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100;

    //for mobile
    if (isMobile) {
      controlAnimaton({});  //sid initial position

      controlAnimaton({
        className: eddi,
        marginDirection: false,
      });

      //display eddi and sid on mobile
      if (positionScroll > 27) {
        controlAnimaton({
          className: seed,
          startPosition: "0px",
          marginDirection: true,
          opacity: "1",
        });
      }

      if (positionScroll > 57) {
        controlAnimaton({
          className: eddi,
          startPosition: "0px",
          marginDirection: false,
          opacity: "1",
        });
      }
      return;
    } else {
      //animation for desctop
      controlAnimaton({}); //sid initial position

      controlAnimaton({
        className: eddi,
        marginDirection: false,
      });

      //scroll for desctop
      if (positionScroll > 75 && !isMobile) {
        //display eddi seed on desktop
        controlAnimaton({
          className: seed,
          startPosition: "0px",
          marginDirection: true,
          opacity: "1",
        });

        controlAnimaton({
          className: eddi,
          startPosition: "0px",
          marginDirection: false,
          opacity: "1",
        });
      }

      //hide eddi and sid on desctop
      if (positionScroll < 76) {
        controlAnimaton({}); //sid initial position

        controlAnimaton({
          className: eddi,
          marginDirection: false,
        });
      }
    }
  });
}

module.exports = seedEddiAnimation;