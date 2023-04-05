import fs from "fs";

function renderPage(page, config={}){
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "Home")
                    .replace("$CSS_LINK", config.cssLink || "");
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

    return navbar + page + footer;
}
function readPage(pagePath){
    return fs.readFileSync(pagePath).toString();
}

function renderLogin(){
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);
    const path = "./public/pages/login/login.html";
    const loginPage = readPage(path);
    
    return loginPage + footer;
}
function renderFrontpage(){
    const path = "./public/pages/frontpage/frontpage.html";
    const frontPage = readPage(path);
    const constructedPage = renderPage(frontPage, {
        tabTitle: "Forside"
    });
    return constructedPage;
}
function renderNodeModules(){
    const path = "./public/pages/express/express.html";
    const modulePage = readPage(path);
    const constructedPage = renderPage(modulePage, {
        tabTitle: "Node Modules"
    });
    return constructedPage;
}
function renderSSR(){
    const path = "./public/pages/SSR/ssr.html";
    const ssrPage = readPage(path);
    const constructedPage = renderPage(ssrPage, {
        tabTitle: "SSR"
    });
    return constructedPage;
}
function renderApi(){
    const path = "./public/pages/apipage/api.html";
    const apiPage = readPage(path);
    const constructedPage = renderPage(apiPage, {
        tabTitle: "Other theory"
    });
    return constructedPage;
}

export default {
    renderPage,
    readPage,
    renderLogin,
    renderFrontpage,
    renderNodeModules,
    renderSSR,
    renderApi
}