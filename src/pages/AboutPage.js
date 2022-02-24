import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */`
        <div id="header">
                ${Header.render()}
            </div>
            <div class="max-w-5xl mx-auto">
                <h1>About</h1>
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default AboutPage;