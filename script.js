
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const background = new Image();
const player = new Image();

background.src = "assets/background.png";
player.src = "assets/lumi-sprite.png";

background.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};
player.onload = () => {
  ctx.drawImage(player, 100, 300, 48, 48); // Render piccolo personaggio
};

const music = document.getElementById("bgMusic");
music.volume = 0.3;
