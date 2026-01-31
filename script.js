const btn = document.getElementById("btn");
const memeImg = document.getElementById("memeImg");
const memeTitle = document.getElementById("memeTitle");
const loading = document.getElementById("loading");
const themeBtn = document.getElementById("themeBtn");

//function for generation of meme
async function getMeme() {
  loading.style.display = "block";
  memeImg.style.display = "none";

  try {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    memeImg.src = data.url;
    memeTitle.innerText = data.title;

    memeImg.onload = () => {
      loading.style.display = "none";
      memeImg.style.display = "block";
    };

  } catch {
    loading.innerText = "Failed to load meme ;-; ";
  }
}
//end of function

//for dark theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Load first meme as soon as website opens
getMeme();
