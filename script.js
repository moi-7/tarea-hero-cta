let iconSearch = document.querySelector(".searchtbn");
let inputSearch = document.querySelector("#search");
let nav = document.querySelector("nav");

iconSearch.addEventListener("click", () => {
  inputSearch.classList.toggle("block");
  inputSearch.classList.toggle("translate");
  if (inputSearch.classList.contains("block")) {
    inputSearch.focus();
  }
});



