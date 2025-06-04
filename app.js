const canvas = document.getElementById("farmCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 32;
const farmWidth = 25;
const farmHeight = 25;

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < farmWidth; x++) {
    for (let y = 0; y < farmHeight; y++) {
      ctx.strokeStyle = "#ccc";
      ctx.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
}

let placedObjects = [];

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / gridSize);
  const y = Math.floor((e.clientY - rect.top) / gridSize);
  placedObjects.push({ type: "barn", x, y });
  drawObjects();
});

function drawObjects() {
  drawGrid();
  placedObjects.forEach(obj => {
    ctx.fillStyle = "brown"; // Platzhalter für Scheune
    ctx.fillRect(obj.x * gridSize, obj.y * gridSize, gridSize, gridSize);
  });
}

drawGrid();
