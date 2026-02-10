const upload = document.getElementById("upload");
const foto = document.getElementById("foto");
const fotoCarta = document.getElementById("fotoCarta");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const overlay = document.getElementById("overlay");
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

/* Subir foto */
upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    foto.src = url;
    foto.style.display = "block";
    fotoCarta.src = url;
  }
});

/* Botón NO huye */
function moveButton() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random()*70 + "%";
  noBtn.style.top = Math.random()*70 + "%";
}
noBtn.addEventListener("mouseover", moveButton);

/* Botón SÍ muestra sobre */
yesBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

/* Abrir sobre + música */
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  music.play();
});
