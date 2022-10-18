import moment from "moment";
import { GET_POSTS_URL } from "./settings/api";
import { getToken } from "./utils/storage";

const postsContainer = document.querySelector("#postsContainer");
const postsNotificationMessage = document.querySelector(".posts__notification");
const accessToken = getToken();
if (!accessToken) {
    location.href = "/login.html";
}

const options = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
};

const getPostUrl = `${GET_POSTS_URL}?_author=true`;
let numberOfPosts = 20;
//const defaultName = "John r. Smith";

async function getAllPosts() {
    const response = await fetch(getPostUrl, options);
    const posts = await response.json();
    if (!posts.length) {
        postsNotificationMessage.innerHTML = "Sorry no posts currently";
    } else {
        console.log(posts);
        postsContainer.innerHTML = "";
        for (let i = 0; i < numberOfPosts; i++) {
            console.log("___________");
            console.log(posts[i].id);
            console.log(posts[i].author.name);
            console.log(posts[i].title);
            console.log(posts[i].body);
            console.log("___________");

            postsContainer.innerHTML += `
                    <div class="flex border-t border-primary py-2 w-full">
                        <a href="single-post.html?post_id=${posts[i].id}"
                            >

                            <div
                                class="w-12 h-12 bg-clr-black rounded-full border border-clr-white"
                            ></div
                        ></a>

                        <div class="flex flex-1 flex-col ml-2">
                            <p class="text-clr-white font-semibold">
                                ${posts[i].author.name}
                            </p>
                            <p class="text-clr-white text-sm max-w-326px ">
                                ${posts[i].body}
                            </p>
                        </div>
                    </div>`;
        }
    }
}

getAllPosts().then();
