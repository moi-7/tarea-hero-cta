let Iconsearch = document.querySelector(".searchtbn");

Iconsearch.addEventListener("click", () => {
  let inputSearch = document.querySelector("#search");
  inputSearch.classList.toggle("block");
  inputSearch.classList.toggle("translate");
  if (inputSearch.classList.contains("block")) {
    inputSearch.focus();
  }
});
