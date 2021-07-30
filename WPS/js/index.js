//function
//import { letLoginWindowShow, letLoginWindowClose } from "./function.js";

//api
import { emailLogin } from "./api.js";
//dom queryselect
let L_show = document.querySelector(".login");
let L_img = document.querySelector(".user-img");
let L_close = document.querySelector(".login-close");
let L_window = document.querySelector("#login-box");
let L_logo = document.querySelector(".main-pic");
let trialLogin = document.querySelector(".trial-login");
let emailBtn = document.querySelector(".email-right");
let mainWrap = document.querySelector(".main-wrap");
let mainQr = document.querySelector(".main-qr");
let mainEmail = document.querySelector(".main-mail");
let emailBackBtn = document.querySelector(".mail-nav-left");
let emailLoginBtn = document.querySelector(".from-button");
let emailAccount = document.querySelector(".mail-account>input");
let emailPassword = document.querySelector(".mail-password>input");
let emailOnline = $("#onlick-check");
console.log(emailOnline)
//css dom
L_show.onclick = letLoginWindowShow;
trialLogin.onclick = letLoginWindowShow;
L_close.onclick = letLoginWindowClose;
emailBtn.onclick = letEmailWindowShow;
emailBackBtn.onclick = letEmailWindowBack;
L_logo.onclick = letQrShow;
function letLoginWindowShow() {
    L_window.style.display = "block";
}
function letLoginWindowClose() {
    L_window.style.display = "none";
}
function letEmailWindowShow() {
    L_logo.style.display = "none";
    mainWrap.style.display = "none";
    mainEmail.style.display = "block";
}
function letEmailWindowBack() {
    L_logo.style.display = "block";
    mainWrap.style.display = "block";
    mainEmail.style.display = "none";
}
function letQrShow() {
    let current = L_logo.getAttribute("current");
    console.log(current);
    if (current == "wrap") {
        L_logo.setAttribute("current", "qr");
        L_logo.style.backgroundImage = "url(https://cloud.cache.wpscdn.com/ovs/account/libs/img/computer.9c340056.png)";
        mainWrap.style.display = "none";
        mainQr.style.display = "block";
    } else if (current == "qr") {
        L_logo.setAttribute("current", "wrap");
        L_logo.style.backgroundImage = "url(https://cloud.cache.wpscdn.com/ovs/account/libs/img/qrcode.55e9584f.png)";
        mainWrap.style.display = "block";
        mainQr.style.display = "none";
    }
}

//ajax
if (localStorage.email_account && localStorage.email_password) {
    emailLogin(localStorage.email_account, localStorage.email_password).then(function (value) {
        console.log(value);
        if (value.code == 200) {
            letLoginWindowClose();
            L_show.style.display = "none";
            L_img.style.display = "block";
            trialLogin.style.display = "none";
        }
    })
}
emailLoginBtn.onclick = letEmailLogin;
function letEmailLogin() {
    let account = emailAccount.value;
    let password = emailPassword.value;
    console.log(account, password);
    if (emailOnline.is(':checked')) {
        alert("check");
        localStorage.email_account = account;
        localStorage.email_password = password;
    } else {
        localStorage.clear();
    }
    emailLogin(account, password).then(function (value) {
        if (value.code == 200) {
            letLoginWindowClose();
            L_show.style.display = "none";
            L_img.style.display = "block";
            trialLogin.style.display = "none";
        }
    })
}
//