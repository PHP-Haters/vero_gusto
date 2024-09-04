const currentURL = window.location.href.split("/");
const currentPage = currentURL[currentURL.length - 1];
const firstPageLink = document.querySelector("#first-page");
const secondPageLink = document.querySelector("#second-page");

if (currentPage == "index.html") {
    firstPageLink.classList.add("current-page");
} else {
    secondPageLink.classList.add("current-page");
}