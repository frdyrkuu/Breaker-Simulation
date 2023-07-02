function showHamburger() {
    const ham = document.getElementById("hamburger");

    if (ham.classList.contains("hidden")) {

        ham.classList.remove("hidden")
        ham.classList.add("grid")
    }
    else {
        ham.classList.remove("grid")
        ham.classList.add("hidden")
    }
}

function updateImageSource() {
    var selectedValue = document.getElementById("faultLocation").value;
    var imageElement = document.getElementById("busImage");
    var defaultImage = "public/images/slc.png";

    if (selectedValue !== "") {
        imageElement.src = "public/images/bus" + selectedValue + ".jpg";
    } else {
        imageElement.src = defaultImage;
    }
}
