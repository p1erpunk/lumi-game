
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bg = new Image();
bg.src = "assets/background.png";

const player = new Image();
player.src = "assets/lumi-sprite.png";

player.onload = () => {
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(player, 100, 300);
};

document.getElementById("bgMusic").volume = 0.3;
