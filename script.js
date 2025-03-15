var app = document.querySelector(".typing");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString("Developer")
  .pauseFor(1000)
  .deleteChars(9) // Deletes "Developer"
  .pauseFor(500)
  .typeString("Freelancer")
  .pauseFor(2000)
  .deleteAll()
  .start();

// document.addEventListener("DOMContentLoaded", type);

document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".services .service-card");

  function revealCards() {
    serviceCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 50) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealCards);

  revealCards(); // Trigger animation on page load if cards are already in view
});

// contact section

document.addEventListener("DOMContentLoaded", function () {
  // Select the heading and paragraph in the Contact section
  const heading = document.querySelector("#contact h2");
  const paragraph = document.querySelector("#contact p");

  function revealElements() {
    // Get the position of the heading and paragraph relative to the viewport
    const headingTop = heading.getBoundingClientRect().top;
    const paragraphTop = paragraph.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    // Reveal elements if they are within the viewport
    if (headingTop < windowHeight - 50) {
      heading.classList.add("show");
    }
    if (paragraphTop < windowHeight - 50) {
      paragraph.classList.add("show");
    }
  }

  window.addEventListener("scroll", revealElements);

  revealElements(); // Trigger animation on page load if elements are already in view
});
