document.addEventListener("DOMContentLoaded", () => {

  const card = document.getElementById("card");
  const wish = document.getElementById("wish");
  const nameEl = document.getElementById("name");
  const music = document.getElementById("music");
  const countdown = document.getElementById("countdown");
  const startBtn = document.getElementById("startBtn");

  if (!startBtn) {
    console.error("❌ startBtn not found");
    return;
  }

  let effects = [];
  let fireInterval;

  startBtn.addEventListener("click", start);

  function start() {
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
    card.classList.add("hide");
    wish.classList.add("show");

    music.play().catch(() => {});
    animateName("VISHNU — Brother");

    confetti();
    balloons();
    fallingFlowers();

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

  function confetti() {
    for (let i = 0; i < 80; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * innerWidth + "px";
      c.style.background = `hsl(${Math.random() * 360},100%,50%)`;
      c.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(c);
      effects.push(c);
    }
  }

  function balloons() {
    for (let i = 0; i < 12; i++) {
      const b = document.createElement("div");
      b.className = "balloon";
      b.style.left = Math.random() * innerWidth + "px";
      b.style.background = `hsl(${Math.random() * 360},70%,60%)`;
      b.style.animationDuration = Math.random() * 6 + 6 + "s";
      document.body.appendChild(b);
      effects.push(b);
    }
  }

  function fallingFlowers() {
    const petals = ["🌸", "🌼", "🌺", "🍀", "✨"];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "petal";
      p.textContent = petals[Math.floor(Math.random() * petals.length)];
      p.style.left = Math.random() * innerWidth + "px";
      p.style.animationDuration = Math.random() * 4 + 4 + "s";
      document.body.appendChild(p);
      effects.push(p);
    }
  }

  function resetPage() {
    music.pause();
    music.currentTime = 0;

    card.classList.remove("hide");
    wish.classList.remove("show");

    effects.forEach(e => e.remove());
    effects = [];
  }

});
