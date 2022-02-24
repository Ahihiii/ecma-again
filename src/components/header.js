import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class=" mx-auto bg-black grid grid-cols-[200px,auto,150px]">
            <div class="py-2 ">
                <img src="https://i.ytimg.com/vi/8HkEjcnLuQY/maxresdefault.jpg" class=" w-24 mx-auto" />
            </div> 
            <div class="p-2 text-white ">
            ${Nav.render()}
            </div>
            <div class="text-white mx-auto p-6">
            <a href="/signin">
            <i class="fas fa-user text-2xl"></i>
            </a>
            <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <div id="main-menu">
            afterRender() {
                    Nav.afterRender();
                },
            </div>
        </header>`;
    },

};
export default Header;