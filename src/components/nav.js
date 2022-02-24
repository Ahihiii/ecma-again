import { reRender } from "../utils/rerender";

const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Trang chủ</a></li>
                <li><a href="/NewsPage" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Danh mục</a></li>
                <li><a href="/AboutPage" class="block py-3 px-4 text-white text-xl hover:text-orange-500 hover:font-semibold">Bài viết</a></li>
            </ul>
            ${localStorage.getItem("user") ? `<ul class="flex">
            <li class="flex items-center">Xin chao <span class="block py-3 px-4 text-white" id="email"></span></li>
            <li><a class="block py-3 px-4 text-white hover:bg-blue-500" id="logout">Logout</a></li>
        </ul>` : ""}
        </nav>`;
    },
    afterRender() {
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Nav, "#main-menu");
            });
        }
    },
};
export default Nav;