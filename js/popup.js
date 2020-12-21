






function popup() {
    document.querySelector('.add-neighbor-container').style.display = "flex";
}
function closePopup() {
    document.querySelector('.add-neighbor-container').style.display = "none";
}
document.querySelector('.add-neighbor-container').addEventListener('click', (e) => {
    if (e.target.tagName === "DIV") {
        document.querySelector('.add-neighbor-container').style.display = "none";
    }
});