let searchBox = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    searchBox.classList.toggle("active");
    navbar.classList.remove("active");
};

window.onscroll = () => {
    searchBox.classList.remove("active");
    navbar.classList.remove("active");
}


let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    navbar.classList.toggle("active");
    searchBox.classList.remove("active");
};


let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
});