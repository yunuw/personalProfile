var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

checkSize();

window.onresize = function () {
    checkSize();
};

function checkSize() {
    if (window.innerWidth <= 768) {
        img2.style.display = "none";
    }
    else {
        img2.style.display = "block";
    }
}

var hike = document.getElementById("hike");
var paint = document.getElementById("paint");
var kayak = document.getElementById("kayak");
var tennis = document.getElementById("tennis");
var travel = document.getElementById("travel");

hike.onclick = function () {
    img1.src = "images/hiking1.jpeg"
    img2.src = "images/hiking2.jpeg"
};

paint.onclick = function () {
    img1.src = "images/painting1.jpeg"
    img2.src = "images/painting2.jpeg"
};

kayak.onclick = function () {
    img1.src = "images/kayaking1.jpeg"
    img2.src = "images/kayaking2.jpeg"
};

tennis.onclick = function () {
    img1.src = "images/tennis1.jpeg"
    img2.src = "images/tennis2.jpeg"
};

travel.onclick = function () {
    img1.src = "images/traveling1.jpeg"
    img2.src = "images/traveling2.jpeg"
};