const image = document.getElementById("image");
const avatar = document.querySelector(".cv0-img");
image.onchange = (evt) => {
    const [file] = image.files;
    if (file) {
        avatar.style.display = "block";
        avatar.src = URL.createObjectURL(file);
    }
};