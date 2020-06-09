const menuIcon = document.querySelector(".hamMenu");
const l1 = document.querySelector(".line1");
const l2 = document.querySelector(".line2");
const l3 = document.querySelector(".line3");
const nav = document.querySelector(".navbar")

menuIcon.addEventListener('click', () => {
    nav.classList.toggle("change")
    l1.classList.toggle("change1");
    l2.classList.toggle("change2");
    l3.classList.toggle("change3");
})