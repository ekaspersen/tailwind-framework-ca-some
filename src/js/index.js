import "../input.css";
import { clearStorage } from "./utils/storage";
import createHeaderBar from "./components/createHeaderBar";

createHeaderBar();
const logOutBtn = document.querySelector("#logout-btn");

if (logOutBtn) {
    logOutBtn.addEventListener("click", function () {
        console.log("I am clicked");
        clearStorage();
        window.location.replace("/login.html");
    });
}

document.getElementById("createPostBtn").onclick = function () {
    createPostForm();
};

function createPostForm() {
    document.getElementById("newPostForm").classList.toggle("hidden");
    document.getElementById("newPostForm").classList.toggle("grid");
}
