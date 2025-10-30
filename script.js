const menuElements = document.querySelectorAll("nav ul li");

menuElements.forEach((el) => {
  el.addEventListener("click", () => {
    const targetId = el.getAttribute("data-target");
    const section = document.getElementById(targetId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
