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

export default {
    renderPage,
    readPage,
    renderLogin
}