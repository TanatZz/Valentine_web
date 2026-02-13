const envelope = document.getElementById("envelope");
const envelopePage = document.getElementById("envelopePage");
const cardPage = document.getElementById("cardPage");

const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
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

/* Next Image */
nextBtn.addEventListener("click",()=>{
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    sliderImage.src = images[currentIndex];
});

/* Previous Image */
prevBtn.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    sliderImage.src = images[currentIndex];
});

/* Auto Change Image Every 3 Seconds */
setInterval(()=>{
    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    sliderImage.src = images[currentIndex];

},2000);
