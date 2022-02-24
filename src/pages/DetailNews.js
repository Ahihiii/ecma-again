import data from "../data";
import { get } from "../api/posts";
import Header from "../components/header";

const DetailNews = {
    async render(id) {
        const { data } = await get(id);

        return /* html */ `
        <div class=" bg-gray-800 max-h-full">
        <div id="header">
                ${Header.render()}
            </div>
        <div class="max-w-5xl mx-auto p-4">
        <div class="">
        <h1 class="text-4xl text-white">${data.title}</h1>
            <img class="mx-auto w-3/4 p-6 " src="${data.img}" />
             </div>
            
            <div class="">
            <p class="text-white">${data.desc}</p>
            <p class="text-white">${data.price}</p>
            </div>    
            </div>
        </div>`;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default DetailNews;