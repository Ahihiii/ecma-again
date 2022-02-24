import axios from "axios";
import { getAll } from "../api/posts";
import Header from "../components/header";

const HomePage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="mx-auto bg-gray-900"> 
        <div id="header">
                ${Header.render()}
            </div>
            <div class="bg-black max-w-screen-xl mx-auto grid grid-cols-[1010px,auto]">
            <div>
                 <img src="https://trinhde.vn/game-god-of-war-cho-pc/imager_465.jpg"/>
            </div>
            <div class="text-white mx-auto py-2 grid grid-rows-3"> 
                <div class="grid grid-cols-[95px,auto]">
                    <img class="h-36 min-h-0" src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7"> 
                    <p>GOD OF WAR </p>
                </div>
                
                <div class="grid grid-cols-[95px,auto]">
                    <img class="h-36 min-h-0" src="https://m.media-amazon.com/images/M/MV5BZTg4NGUxZWMtNmU3OC00YTNmLTkwYWMtYjE3OWQ4ODY3ODBhXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg"> 
                    <p>DYING LIGHT 2 </p>
                </div>
                <div class="grid grid-cols-[95px,auto]">
                    <img class="h-36 min-h-0" src="https://i.redd.it/3jbxpsgev8461.png"> 
                    <p>CYBERPUNK 2077 </p>
                </div>
            </div>
                
            </div>
            
            <div class="DetailNews pt-12 max-w-screen-xl  mx-auto">
                <h2 class="text-2xl font-semibold my-4 text-white">Hot Popular</h2>
                <div class="grid grid-cols-5 gap-3">
                    ${data.map((post) => `
                        <div class=" rounded-lg bg-black">
                            <a href="/DetailNews/${post.id}">
                                <img src="${post.img}" class="w-full h-4/6" />
                            </a>
                            <div class="p-4"> 
                            <h1 class="my-3"><a  href="/DetailNews/${post.id}"class="font-semibold text-lg text-white">${post.name}</a></h1>
                            <p class="text-white">${post.price} VNĐ</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
            
        </div>
        `;
    },
};

export default HomePage;