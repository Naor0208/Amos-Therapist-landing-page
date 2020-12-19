const navBar = document.querySelector("#navBar");
const pages = document.querySelectorAll(".container");

navBar.addEventListener("click", choosePage);


function choosePage(e) {
  let target = e.target;
  if (target.parentElement.classList.contains("link")) {
    pages.forEach((page) => {
      page.style.display = "none";
      if (page.classList.contains(target.parentElement.classList[0])) {
        page.removeAttribute("style");
      }
    });
  }
}




