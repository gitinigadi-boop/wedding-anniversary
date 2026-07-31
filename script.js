// Photo Slideshow
const photos = [
    "photo1.jpg",
    "photo2.jpg"
];

let index = 0;

setInterval(() => {
    index++;
    if(index >= photos.length){
        index = 0;
    }
    document.getElementById("slide").src = photos[index];
}, 5000);

// Music Play
function playMusic(){
    document.getElementById("music").play();
}

// Floating Hearts
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animation = "floatUp 6s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 400);

// Animation Style
const style = document.createElement("style");

style.innerHTML = `
@keyframes floatUp{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(style);

// Welcome Message
window.onload = function(){
    setTimeout(() => {
        alert("💖 Happy Wedding Anniversary 💖\n\nUmesh Kabbur ❤️ Bhagyalaxmi Kabbur\n\nMay your love last forever!");
    },1000);
};
