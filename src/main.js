import Navigo from "navigo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailNews from "./pages/DetailNews";
import News from "./admin/posts/News";
import NewsPage from "./pages/NewsPage";
import AddNew from "./admin/posts/AddNew";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CartPage from "./pages/Cart";
import Dashboard from "./admin/Dashboard";
import EditNew from "./admin/posts/EditNew";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("content").innerHTML = await content.render(id);

    if (content.afterRender) content.afterRender();
};

router.on("/Admin/*/", () => {

}, {
    before(done, match) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});

router.on({
    "/": () => {
        print(HomePage);
    },
    "/AboutPage": () => {
        print(AboutPage);
    },
    "/NewsPage": () => {
        print(NewsPage);
    },
    "/signin": () => { print(SignIn); },
    "/signup": () => { print(SignUp); },
    "/CartPage": () => { print(CartPage); },

    "/DetailNews/:id": ({ data }) => {
        const { id } = data;
        print(DetailNews, id);
    },
    "/Admin": () => { print(Dashboard); },
    "/Admin/News": () => { print(News); },
    "/Admin/AddNew": () => { print(AddNew); },
    "/Admin/:id/EditNew": ({ data }) => {
        const { id } = data;
        print(EditNew, id);
    },
});

router.resolve();