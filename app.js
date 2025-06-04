
const canvas = document.getElementById("farmCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 32;
const farmWidth = 25;
const farmHeight = 25;

const farmTile = new Image();
farmTile.src = "assets/tiles/farm_tile.png";

const tileImages = {
  barn: new Image(),
  house: new Image(),
  coop: new Image()
};

tileImages.barn.src = "assets/tiles/barn.png";
tileImages.house.src = "assets/tiles/house.png";
tileImages.coop.src = "assets/tiles/coop.png";

let placedObjects = [];
let selectedObject = "barn";

document.querySelectorAll("button[data-object]").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedObject = btn.dataset.object;
  });
});

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / gridSize);
  const y = Math.floor((e.clientY - rect.top) / gridSize);
  placedObjects.push({ type: selectedObject, x, y });
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < farmWidth; x++) {
    for (let y = 0; y < farmHeight; y++) {
      ctx.drawImage(farmTile, x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
  placedObjects.forEach(obj => {
    const img = tileImages[obj.type];
    if (img) {
      ctx.drawImage(img, obj.x * gridSize, obj.y * gridSize, gridSize, gridSize);
    }
  });
}

farmTile.onload = draw;
