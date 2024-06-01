
let duck;

function chooseDuck(quack) {
    duck = quack;
    if (duck != null) {
        document.querySelector("#chosen-duck").src = duck;
    }
    localStorage.setItem("storageName", duck);
};

window.onload = document.querySelector("#chosen-duck").src = localStorage.getItem("storageName");

