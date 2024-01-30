// ### html elements

const slidesContainerEl = document.getElementById("slides-container");

// ### on load

const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let slidesHTML = "";
let lastActive = 0;
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == 0 ? "active" : "";

  slidesHTML += `<img src="./img/${slide}" class="slide ${activeClass}" id="img-${i}" alt="slide ${i}"/>`;
}

function setActiveImage(id) {
  const imgActive = document.getElementById(`img-${lastActive}`);
  const img = document.getElementById(`img-${id}`);
  imgActive.classList.remove("active");
  img.classList.add("active");
  lastActive = 

}

document.getElementById("up").addEventListener("click", function(){
  setActiveImage(1)
})
document.getElementById("down").addEventListener("click", function(){})
console.log(slidesHTML);
slidesContainerEl.innerHTML = slidesHTML;
