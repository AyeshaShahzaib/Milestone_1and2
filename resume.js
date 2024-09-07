var skills = document.querySelector("#List");
var show_more = document.querySelector(".button");
if (show_more) {
    show_more.addEventListener("click", function () {
        if (skills.style.display === "" || skills.style.display === "none") {
            skills.style.display = "block";
            show_more.innerText = "less";
        }
        else {
            skills.style.display = "none";
            show_more.innerText = " more";
        }
    });
}
