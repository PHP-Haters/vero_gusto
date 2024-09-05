const firstPageLink = document.querySelector("#first-page");
const secondPageLink = document.querySelector("#second-page");

window.addEventListener("load", () => {
    const currentURL = window.location.href.split("/");
    const currentPage = currentURL[currentURL.length - 1];
    
    console.log(currentPage);

    if (currentPage == "index.html") {
        firstPageLink.classList.add("current-page");
    } else {
        secondPageLink.classList.add("current-page");
    }
    
})