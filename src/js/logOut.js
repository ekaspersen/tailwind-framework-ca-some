import { clearStorage } from "./utils/storage";
const pfpSettings = document.querySelector("#pfpSettings");
const pfpSettingsDropdown = document.querySelector("#pfpSettingsDropdown");
pfpSettings.addEventListener("click", function () {
    pfpSettingsDropdown.classList.toggle("hidden");
});

const logOutBTN = document.querySelector("#logOutBTN");
logOutBTN.addEventListener("click", function () {
    clearStorage();
    window.location.replace("/login.html");
});
