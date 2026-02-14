const envelope = document.getElementById("envelope");
const envelopePage = document.getElementById("envelopePage");
const cardPage = document.getElementById("cardPage");

const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* Click Envelope -> Show Card */
envelope.addEventListener("click",()=>{
    envelopePage.classList.add("d-none");
    cardPage.classList.remove("d-none");
});



/* Auto Change Image Every 3 Seconds */
setInterval(()=>{
    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    sliderImage.src = images[currentIndex];

},2000);


const stickers = ["❤️","💖","💘","💕","💗","💞"];

const container = document.getElementById("sticker-container");

function createSticker(){
  
  const sticker = document.createElement("div");
  sticker.classList.add("sticker");

  // random sticker
  sticker.innerText = stickers[
    Math.floor(Math.random() * stickers.length)
  ];

  // random position
  sticker.style.left = Math.random() * 100 + "vw";

  // random size
  sticker.style.fontSize = (20 + Math.random() * 40) + "px";

  // random speed
  sticker.style.animationDuration = (4 + Math.random() * 4) + "s";

  container.appendChild(sticker);

  // remove after animation
  setTimeout(()=>{
    sticker.remove();
  },8000);
}

// create every 500ms
setInterval(createSticker,500);