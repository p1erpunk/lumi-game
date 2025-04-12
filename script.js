
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bg = new Image();
const player = new Image();
const enemy = new Image();

bg.src = "assets/background.png";
player.src = "assets/lumi-sprite.png";
enemy.src = "assets/enemy.png";

let px = 100, py = 320;
let vx = 0, vy = 0;
let gravity = 1;
let jumping = false;

let enemyX = 600;
let direction = -1;

const jumpSound = new Audio("assets/jump.mp3");
const hitSound = new Audio("assets/hit.mp3");

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") vx = -5;
  if (e.code === "ArrowRight") vx = 5;
  if (e.code === "Space" && !jumping) {
    vy = -15;
    jumping = true;
    jumpSound.play();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowLeft" || e.code === "ArrowRight") vx = 0;
});

function checkCollision() {
  return (
    px < enemyX + 48 &&
    px + 48 > enemyX &&
    py < 368 + 48 &&
    py + 48 > 368
  );
}

function loop() {
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

  // Player physics
  px += vx;
  py += vy;
  vy += gravity;

  if (py >= 368) {
    py = 368;
    vy = 0;
    jumping = false;
  }

  // Enemy movement
  enemyX += direction * 2;
  if (enemyX < 0 || enemyX > canvas.width - 48) direction *= -1;

  ctx.drawImage(player, px, py, 48, 48);
  ctx.drawImage(enemy, enemyX, 368, 48, 48);

  if (checkCollision()) {
    hitSound.play();
    alert("💥 Game Over!");
    document.location.reload();
  } else {
    requestAnimationFrame(loop);
  }
}

bg.onload = () => player.onload = () => enemy.onload = loop;

document.getElementById("bgMusic").volume = 0.3;
