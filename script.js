const menuElements = document.querySelectorAll("nav ul li");
const contact = document.querySelector(".description__btn-contact");
const modalWindow = document.querySelector('#modal-window');
const modalWindowBtn = document.querySelector(".modal-window__btn");


menuElements.forEach((el) => {
  el.addEventListener("click", () => {
    const targetId = el.getAttribute("data-target");
    const section = document.getElementById(targetId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});


contact.addEventListener('click', () =>{
  modalWindow.style.display = 'flex'
})

modalWindowBtn.addEventListener("click", () =>{
modalWindow.style.display = 'none'
})



