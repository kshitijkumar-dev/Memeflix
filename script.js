const btn = document.getElementById("btn");
const memeImg = document.getElementById("memeImg");
const memeTitle = document.getElementById("memeTitle");
const loading = document.getElementById("loading");
const themeBtn = document.getElementById("themeBtn");
const downloadBtn = document.getElementById("downloadBtn");


//function start
async function getMeme(){
  loading.style.display = "block";
  memeImg.style.display = "none";

  try{
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    memeImg.src = data.url;
    memeTitle.innerText = data.title;
    downloadBtn.href = data.url;

    memeImg.onload = ()=>{
      loading.style.display = "none";
      memeImg.style.display = "block";
    }

  }catch{
    loading.innerText = "Failed to load meme 😢";
  }
}
//function end


btn.addEventListener("click", getMeme);

themeBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
});

//for generqation of meme as soon as website opens
getMeme();
