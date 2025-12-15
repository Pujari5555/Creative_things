const card = document.getElementById("card");
const wish = document.getElementById("wish");
const nameEl = document.getElementById("name");
const music = document.getElementById("music");
const countdown = document.getElementById("countdown");
const startBtn = document.getElementById("startBtn");

let effects = [];
let fireInterval;

startBtn.addEventListener("click", start);

function start() {
  if (navigator.vibrate) navigator.vibrate(150);
  runCountdown(3);
}

function runCountdown(n) {
  countdown.textContent = n > 0 ? n : "🎉";
  countdown.classList.add("show");

  if (n > 0) {
    setTimeout(() => runCountdown(n - 1), 800);
  } else {
    setTimeout(() => {
      countdown.classList.remove("show");
      celebrate();
    }, 600);
  }
}

function celebrate() {
  ocument.body.classList.add("celebrated");
  card.classList.add("hide");
  wish.classList.add("show");

  music.play().catch(()=>{});
  animateName("VISHNU");

  confetti();
  balloons();
  fireworks();
  fallingFlowers();   // 🌸 NEW

  setTimeout(resetPage, 12000);
}

function animateName(text) {
  nameEl.textContent = "";
  [...text].forEach((c, i) => {
    setTimeout(() => {
      nameEl.textContent += c + " ";
    }, i * 250);
  });
}

function resetPage() {
  music.pause();
  music.currentTime = 0;

  document.body.classList.remove("celebrated");
  card.classList.remove("hide");
  wish.classList.remove("show");
}

function fallingFlowers() {
  const petals = ["🌸", "🌼", "🌺", "🍀", "✨"];

  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.animationDuration = Math.random() * 4 + 4 + "s";

    document.body.appendChild(p);
    effects.push(p);
  }
}

