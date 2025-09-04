document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".home-footer-col h3").forEach(h3 => {
    h3.addEventListener("click", () => {
      document.querySelectorAll(".home-footer-col").forEach(col => {
        if (col !== h3.parentElement) col.classList.remove("open");
      });
      h3.parentElement.classList.toggle("open");
    });
  });
});
