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
        postsContainer.innerHTML = `<p class="text-center text-clr-white text-lg">${posts.posts[i].owner} has no posts  ...</p>`;
    } else {
        console.log(posts);
        postsContainer.innerHTML = "";
        for (let i = 0; i < numberOfPosts; i++) {
            //console.log(posts.posts[i].id);
            //console.log(posts.posts[i].owner);
            //console.log(posts.posts[i].title);
            //console.log(posts.posts[i].body);

            postsContainer.innerHTML += `
                    <div class="post-style">
                        <a href="single-post.html?post_id=${posts.posts[i].id}"
                            >

                            <div
                                class="bg-clr-black rounded-full border border-clr-white"
                                style="width: 48px; height: 48px;"
                            ></div
                        ></a>

                        <div class="flex flex-1 flex-col ml-2">
                            <p class="text-primary-light ">
                                ${posts.posts[i].owner}
                            </p>
                            <p class="text-clr-white font-semibold">
                                ${posts.posts[i].title}
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
