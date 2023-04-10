import fs from "fs";

function renderAdminPage(page, config={}){
    const navbar = fs.readFileSync("./public/components/navbar/adminnavbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "Admin Page")
                    .replace("$CSS_LINK", config.cssLink || "");
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

    return navbar + page + footer;
}

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
function renderExpress(){
    const path = "./public/pages/express/express.html";
    const modulePage = readPage(path);
    const constructedPage = renderPage(modulePage, {
        tabTitle: "Node Modules || Express"
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
function renderDocumentationPage(){
    const path = "./public/pages/adminpage/adminpage.html";
    const adminPage = readPage(path);
    const constructedPage = renderAdminPage(adminPage, {
        tabTitle: "Add Documentation"
    });
    return constructedPage;
}
function renderNodemonPage(){
    const path = "./public/pages/nodemon/nodemon.html";
    const nodemonPage = readPage(path);
    const constructedPage = renderPage(nodemonPage, {
        tabTitle: "Node Modules || Nodemon"
    });
    return constructedPage;
}
function renderNPMpage(){
    const path = "./public/pages/NPM/npm.html";
    const npmPage = readPage(path);
    const constructedPage = renderPage(npmPage, {
        tabTitle: "Node modules || NPM"
    });
    return constructedPage;
}
function renderExportpage(){
    const path = "./public/pages/exportpage/exportpage.html";
    const exportPage = readPage(path);
    const constructedPage = renderPage(exportPage, {
        tabTitle: "Export/Import"
    });
    return constructedPage;
}
function renderVercelpage(){
    const path = "./public/pages/vercel/vercel.html";
    const vercelPage = readPage(path);
    const constructedPage = renderPage(vercelPage, {
        tabTitle: "Vercel"
    });
    return constructedPage;
}

export default {
    renderLogin,
    renderFrontpage,
    renderExpress,
    renderSSR,
    renderApi,
    renderDocumentationPage,
    renderNodemonPage,
    renderNPMpage,
    renderExportpage,
    renderVercelpage
}