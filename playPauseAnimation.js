const controllers = document.getElementsByClassName("play-pause-icon");
const floating = document.getElementsByClassName("floating");
function stopstartanimate() {

    for (const icon of controllers) {
        if (icon.classList.contains("pause")) {
            icon.classList.add("play");
            icon.classList.remove("pause");
            makePlay = false;
            for (const image of floating) {
                image.classList.add("stop-animation");
            }
        } else {
            console.log("run");
            icon.classList.add("pause");
            icon.classList.remove("play");
            makePlay = true;
            for (const image of floating) {
                image.classList.remove("stop-animation");
            }
        }

    }
}
