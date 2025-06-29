 // Typewriter animation initialization
      var typed = new Typed("#typed", {
        strings: [
          "Web Designer",
          "Front-End Dev",
          "AI Generalist",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      // AOS (Animate on Scroll) initialization
      AOS.init({
        once: false,
        duration: 800,
        easing: "ease-in-out",
      });