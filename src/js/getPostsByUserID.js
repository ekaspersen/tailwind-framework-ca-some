import moment from "moment";
import { GET_USER_POSTS_URL } from "./settings/api";
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

const getPostUrl = `${GET_USER_POSTS_URL}`;
let numberOfPosts = 20;

async function getAllPosts() {
    const response = await fetch(getPostUrl, options);
    const posts = await response.json();

    if (!posts.posts.length) {
        console.log(posts);
        postsNotificationMessage.innerHTML = "Sorry no posts currently";
    } else {
        console.log(posts);
        postsContainer.innerHTML = "";
        for (let i = 0; i < numberOfPosts; i++) {
            //console.log(posts.posts[i].id);
            //console.log(posts.posts[i].owner);
            //console.log(posts.posts[i].title);
            //console.log(posts.posts[i].body);

            postsContainer.innerHTML += `
                    <div class="flex border-t border-primary py-2 w-full">
                        <a href="single-post.html?post_id=${posts.posts[i].id}"
                            >

                            <div
                                class="w-12 h-12 bg-clr-black rounded-full border border-clr-white"
                            ></div
                        ></a>

                        <div class="flex flex-1 flex-col ml-2">
                            <p class="text-clr-white font-semibold">
                                ${posts.posts[i].owner}
                            </p>
                            <p class="text-clr-white text-sm max-w-326px ">
                                ${posts.posts[i].body}
                            </p>
                        </div>
                    </div>`;
        }
    }
}

getAllPosts().then();
