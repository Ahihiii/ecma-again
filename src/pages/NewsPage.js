import axios from "axios";
import { getAll } from "../api/posts";
import Header from "../components/header";

const NewsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="mx-auto ">      
        <div id="header">
                ${Header.render()}
            </div>                       
            <div class="DetailNews pt-12 max-w-screen-xl mx-auto pt-20">
            <h2 class="text-2xl font-semibold my-4">Danh mục</h2>
                <div class="grid grid-cols-4 gap-5">
                    ${data.map((post) => `
                        <div class=" rounded-lg border border-black mt-10">
                            <a href="/DetailNews/${post.id}">
                                <img src="${post.img}" class="w-full h-4/6" />
                            </a>
                            <div class="p-4"> 
                            <h1 class="my-3"><a  href="/DetailNews/${post.id}"class="font-semibold text-lg ">${post.name}</a></h1>
                            <p class="">${post.price}</p>

                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>    
        </div>
        `;
    },
};
export default NewsPage;