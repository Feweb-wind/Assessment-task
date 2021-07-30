function letLoginWindowShow(that) {
    let L_window = document.querySelector(".login-box");
    L_window.style.display = "block";
}
function letLoginWindowClose(that) {
    L_window.style.display = "none"
}
export { letLoginWindowShow, letLoginWindowClose }