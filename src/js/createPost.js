import { getToken } from "./utils/storage";
import { CREATE_POST_URL } from "./settings/api";

const createPostForm = document.querySelector("#createPostForm");
const postSubject = document.querySelector("#postSubject");
const postSubjectError = document.querySelector("#postSubjectError");
const postContent = document.querySelector("#postContent");
const postContentError = document.querySelector("#postContentError");
console.log(postSubject.value);

createPostForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isPostSubject = false;
    if (postSubject.value.trim().length > 0) {
        postSubjectError.classList.add("hidden");
        isPostSubject = true;
    } else {
        postSubjectError.classList.remove("hidden");
    }
    let isPostContent = false;
    if (postContent.value.trim().length > 0) {
        postContentError.classList.add("hidden");
        isPostContent = true;
    } else {
        postContentError.classList.remove("hidden");
    }

    let isFormValid = isPostSubject && isPostContent;

    if (isFormValid) {
        const postData = {
            title: postSubject.value,
            body: postContent.value,
        };
        const accessToken = getToken();
        console.log(CREATE_POST_URL);
        (async function createPost() {
            const response = await fetch(CREATE_POST_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(postData),
            });
            console.log("post creation response: ", response);
            if (response.ok) {
                const data = await response.json();
                location.reload();
            } else {
                const err = await response.json();
                const message = "Creating post failed";
                throw new Error(message);
            }
            createPostForm.reset();
        })().catch((err) => {
            console.log(err);
        });
    } else {
        console.log("No input detected ...");
    }
});
