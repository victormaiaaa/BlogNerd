const searchContainer = document.querySelector("#search-area-dropdown");
const inputSearch = document.querySelector("#input-search");
const pesquisa = [
  {
    title: "Andor",
    path: "../noticiasAndor/index.html",
  },
  {
    title: "The Last Of Us",
    path: "../noticiasLastOfUs/index.html",
  },
  {
    title: "The Mandalorian",
    path: "../noticiasMandalorian/index.html",
  },
];

inputSearch.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    return (searchContainer.innerHTML = `<div id="search-area-dropdown"></div>`);
  }

  searchContainer.innerHTML = `
    <div id="search-dropdown">
      ${pesquisa
        .filter((data) =>
          data.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .map(
          (data) => `
        <a href=${data.path}>${data.title}</a>
        <hr/>`
        )
        .join("")}
    </div>`;
});
