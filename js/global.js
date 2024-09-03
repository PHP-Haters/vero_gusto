const currentURL = window.location.href.split("/");
const currentPage = currentURL[currentURL.length - 1];
const firstPageLink = document.querySelector("#first-link");
const secondPageLink = document.querySelector("#second-link");

console.log(currentPage);
console.log(firstPageLink);

if (currentPage == "index.html") {
    firstPageLink.classList.add("current-page");
} else {
    secondPageLink.classList.add("current-page");
}