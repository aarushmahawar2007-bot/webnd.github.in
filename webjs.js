const buttons = document.querySelectorAll(".navbar button");
const council = document.querySelector(".columnc");
const core = document.querySelector(".columncore");
const mentors = document.querySelector(".columnm");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      
      council.style.display = "block";
      core.style.display = "block";
      mentors.style.display = "block";

      if (filter === "council") {
        core.style.display = "none";
        mentors.style.display = "none";
      }

      if (filter === "core") {
        council.style.display = "none";
        mentors.style.display = "none";
      }

      if (filter === "mentors") {
        council.style.display = "none";
        core.style.display = "none";
      }
    });
  });


