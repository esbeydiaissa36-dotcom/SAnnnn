document.addEventListener("DOMContentLoaded", function () {

  const upload = document.getElementById("upload");
  const foto = document.getElementById("foto");

  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const question = document.getElementById("question");

  const carta = document.getElementById("carta");
  const fotoCarta = document.getElementById("fotoCarta");

  /* Subir foto */
  upload.addEventListener("change", function () {
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
    const x = Math.random() * 80;
    const y = Math.random() * 80;

    noBtn.style.posi


