document.addEventListener("DOMContentLoaded", () => {
  const collapsible = document.querySelector(".collapsible");
  const content = document.querySelector(".content");

  collapsible.addEventListener("click", () => {
    // Toggle the content's visibility
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // Optionally, change the button's text or style when active
    collapsible.textContent =
      content.style.display === "block" ? "Hide Content" : "Click Me";
  });
});
