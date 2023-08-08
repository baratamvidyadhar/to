const d = new Date();
const coverlay = document.querySelector(".coverlay");

const isBirthday = d.getDate() + "/" + d.getMonth() === "10/7";

if (isBirthday) {
    coverlay.style.display = 'none'
}
